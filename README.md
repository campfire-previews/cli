oclif-hello-world
=================

oclif example Hello World CLI

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![CircleCI](https://circleci.com/gh/oclif/hello-world/tree/main.svg?style=shield)](https://circleci.com/gh/oclif/hello-world/tree/main)
[![GitHub license](https://img.shields.io/github/license/oclif/hello-world)](https://github.com/oclif/hello-world/blob/main/LICENSE)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g preview_cli
$ preview COMMAND
running command...
$ preview (--version)
preview_cli/0.0.0 darwin-arm64 node-v21.5.0
$ preview --help [COMMAND]
USAGE
  $ preview COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`preview hello PERSON`](#preview-hello-person)
* [`preview hello world`](#preview-hello-world)
* [`preview help [COMMAND]`](#preview-help-command)
* [`preview plugins`](#preview-plugins)
* [`preview plugins:install PLUGIN...`](#preview-pluginsinstall-plugin)
* [`preview plugins:inspect PLUGIN...`](#preview-pluginsinspect-plugin)
* [`preview plugins:install PLUGIN...`](#preview-pluginsinstall-plugin-1)
* [`preview plugins:link PLUGIN`](#preview-pluginslink-plugin)
* [`preview plugins:uninstall PLUGIN...`](#preview-pluginsuninstall-plugin)
* [`preview plugins reset`](#preview-plugins-reset)
* [`preview plugins:uninstall PLUGIN...`](#preview-pluginsuninstall-plugin-1)
* [`preview plugins:uninstall PLUGIN...`](#preview-pluginsuninstall-plugin-2)
* [`preview plugins update`](#preview-plugins-update)

## `preview hello PERSON`

Say hello

```
USAGE
  $ preview hello PERSON -f <value>

ARGUMENTS
  PERSON  Person to say hello to

FLAGS
  -f, --from=<value>  (required) Who is saying hello

DESCRIPTION
  Say hello

EXAMPLES
  $ oex hello friend --from oclif
  hello friend from oclif! (./src/commands/hello/index.ts)
```

_See code: [src/commands/hello/index.ts](https://github.com/preview-app-team5/cli/blob/v0.0.0/src/commands/hello/index.ts)_

## `preview hello world`

Say hello world

```
USAGE
  $ preview hello world

DESCRIPTION
  Say hello world

EXAMPLES
  $ preview hello world
  hello world! (./src/commands/hello/world.ts)
```

_See code: [src/commands/hello/world.ts](https://github.com/preview-app-team5/cli/blob/v0.0.0/src/commands/hello/world.ts)_

## `preview help [COMMAND]`

Display help for preview.

```
USAGE
  $ preview help [COMMAND] [-n]

ARGUMENTS
  COMMAND  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for preview.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v6.0.17/src/commands/help.ts)_

## `preview plugins`

List installed plugins.

```
USAGE
  $ preview plugins [--json] [--core]

FLAGS
  --core  Show core plugins.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ preview plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v4.2.6/src/commands/plugins/index.ts)_

## `preview plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ preview plugins add plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -s, --silent   Silences yarn output.
  -v, --verbose  Show verbose yarn output.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Installs a plugin into the CLI.
  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.


ALIASES
  $ preview plugins add

EXAMPLES
  $ preview plugins add myplugin 

  $ preview plugins add https://github.com/someuser/someplugin

  $ preview plugins add someuser/someplugin
```

## `preview plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ preview plugins inspect PLUGIN...

ARGUMENTS
  PLUGIN  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ preview plugins inspect myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v4.2.6/src/commands/plugins/inspect.ts)_

## `preview plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ preview plugins install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -s, --silent   Silences yarn output.
  -v, --verbose  Show verbose yarn output.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Installs a plugin into the CLI.
  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.


ALIASES
  $ preview plugins add

EXAMPLES
  $ preview plugins install myplugin 

  $ preview plugins install https://github.com/someuser/someplugin

  $ preview plugins install someuser/someplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v4.2.6/src/commands/plugins/install.ts)_

## `preview plugins:link PLUGIN`

Links a plugin into the CLI for development.

```
USAGE
  $ preview plugins link PLUGIN

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help          Show CLI help.
  -v, --verbose
      --[no-]install  Install dependencies after linking the plugin.

DESCRIPTION
  Links a plugin into the CLI for development.
  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.


EXAMPLES
  $ preview plugins link myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v4.2.6/src/commands/plugins/link.ts)_

## `preview plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ preview plugins remove plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ preview plugins unlink
  $ preview plugins remove

EXAMPLES
  $ preview plugins remove myplugin
```

## `preview plugins reset`

Remove all user-installed and linked plugins.

```
USAGE
  $ preview plugins reset [--hard] [--reinstall]

FLAGS
  --hard       Delete node_modules and package manager related files in addition to uninstalling plugins.
  --reinstall  Reinstall all plugins after uninstalling.
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v4.2.6/src/commands/plugins/reset.ts)_

## `preview plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ preview plugins uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ preview plugins unlink
  $ preview plugins remove

EXAMPLES
  $ preview plugins uninstall myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v4.2.6/src/commands/plugins/uninstall.ts)_

## `preview plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ preview plugins unlink plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ preview plugins unlink
  $ preview plugins remove

EXAMPLES
  $ preview plugins unlink myplugin
```

## `preview plugins update`

Update installed plugins.

```
USAGE
  $ preview plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v4.2.6/src/commands/plugins/update.ts)_
<!-- commandsstop -->
