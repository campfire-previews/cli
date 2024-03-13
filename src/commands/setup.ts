import {Command} from '@oclif/core'
import main from "../github-app-installer/installer.js";

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
    await main();
  }
}
