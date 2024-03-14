/* eslint-disable unicorn/prefer-node-protocol */
/* eslint-disable n/no-process-exit */
/* eslint-disable unicorn/no-process-exit */
/* eslint-disable perfectionist/sort-objects */
/* eslint-disable perfectionist/sort-imports */
/* eslint-disable padding-line-between-statements */
import {Command} from '@oclif/core'
import promptGitHubInstall from "../github-app-installer/installer.js";

// Library to create a configuration file for our package.
import Conf from 'conf';

// CLI API used to make AWS service calls
import api from '../aws/index.js';

// 
import prompts from '../prompts/index.js';
import paths from '../util/paths/index.js';
import waitForState from '../util/wait/index.js';
import fs from 'fs';
import log from '../util/log.js';

const DEFAULT_NAME = 'Team5-apps';
const config = new Conf();

async function awsConfiguration() {
  if (config.size > 0) {
    log.warn('There is already existing team5 infrastructure.');
    log.error('Please destroy first using `team5 destroy`.');
    process.exit(0);
  }
  const initialConfig = await prompts.welcome();
  config.set('AWS_REGION', initialConfig.awsRegion);

  log.text('')
  process.stdout.write('Your team5 configuration file lives at ');
  log.info(config.path);

  api.clients.cloudFormation = await api.initializeCfClient(config.get('AWS_REGION'));

  log.header('\nGenerating your team5 infrastructure.');
  log.text('In the mean time, feel free to take a stretch and grab some coffee ☕\n');

  await api.createStack({
    StackName: DEFAULT_NAME,
    TemplateBody: fs.readFileSync(paths.cloudFormationTemplatePath),
  });

  await waitForState({
    startMsg: 'Provisioning AWS resources',
    successMsg: 'AWS infrastructure provisioned successfully',
    desiredState: 'CREATE_COMPLETE',
    describeFn: api.getStackOutputs,
    describeArgs: { StackName: DEFAULT_NAME },
    resCallback(response) {
      return response.Stacks[0].StackStatus;
    },
  });

  const rawOutputs = await api.getStackOutputs({
    StackName: DEFAULT_NAME,
  });
  let outputs = {};
  rawOutputs.Stacks[0].Outputs.forEach(output => {
    outputs[output.OutputKey] = output.OutputValue;
  });

  config.set('VPC_ID', outputs.VPCID);
  config.set('CLUSTER_SECURITY_GROUP_ID', outputs.ClusterSecurityGroupID);
  config.set('CLUSTER_SUBNET_ID', outputs.ClusterSubnetID);
  config.set('ALB_SECURITY_GROUP_ID', outputs.ALBSecurityGroupID);
  config.set('CLUSTER_SUBNETA_ID', outputs.ALBSubnetAID);
  config.set('CLUSTER_SUBNETB_ID', outputs.ALBSubnetAID);
  config.set('ROUTE_TABLE_ID', outputs.RouteTableID);
  config.set('ALB_ARN', outputs.ALBARN);
  config.set('LISTENER_ARN', outputs.ListenerArn);
  config.set('ALB_DOMAIN', outputs.ALBDomain);
  config.set('EFS_SECURITY_GROUP_ID', outputs.EFSSecurityGroupID);
  config.set('EFS_ID', outputs.EFSID);
  config.set('MOUNT_TARGET_ID', outputs.MountTargetID);
  config.set('DEFAULT_SUBNET_NAME', DEFAULT_NAME);
  config.set('CLUSTER_SECURITY_GROUP', `${DEFAULT_NAME}-cluster`);
  config.set('EFS_NAME', DEFAULT_NAME);
  config.set('APP_NAMES', '[]');

  log.text('   ');
  log.header('Create a CNAME record at your custom domain');
  process.stdout.write("Map '*.team5' to this DNS Name:  ");
  log.info(outputs.ALBDomain);

  log.header('\nCreate these two GitHub Secrets in your repositories:');
  process.stdout.write("AWS_ACCESS_KEY_ID      ");
  log.info(outputs.AccessKeyId)
  process.stdout.write("AWS_SECRET_ACCESS_KEY  ");
  log.info(outputs.AccessKeySecret)
  log.text('\nIt may take around 10 minutes for AWS to fully spin up all infrastructure pieces. \nBut for now, we\'re all done! 🤓');
  
}


export default class Setup extends Command {
  static description = 'Initialize AWS infrastructure for preview app'

  static examples = [
    '<%= config.bin %> <%= command.id %>',
  ]

  // static args = {
  //   file: Args.string({description: 'file to read'}),
  // }

  // static flags = {
	// 	force: Flags.boolean({char: 'f'}),
  //   // flag with a value (-n, --name=VALUE)
  //   name: Flags.string({char: 'n', description: 'name to print'}),
  //   // flag with no value (-f, --force)
  // }

  public async run(): Promise<void> {

    await promptGitHubInstall();
		await awsConfiguration();
  }
}
