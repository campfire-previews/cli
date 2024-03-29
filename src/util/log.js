/* eslint-disable n/no-extraneous-import */
/* eslint-disable perfectionist/sort-objects */
/* eslint-disable perfectionist/sort-imports */
import ora from 'ora'
import chalk from 'chalk'
// const { LOGO, COLOR_MAP } = require('./logo')
const primary = chalk.keyword('orange').bold
const secondary = chalk.cyan
const neutral = chalk.white
const emphasis = chalk.bold.red
const success = chalk.green

// const logoColorMap = {
//   o: char => chalk.hex("#ee6f57")(char),
//   w: char => chalk.hex("#f6f5f5")(char),
//   g: char => chalk.hex("#88d7c6")(char),
//   [' ']: char => char
// }

export default {
  spin(msg, opts) {
    const spinner = ora(msg)
    spinner.color = opts?.color || 'cyan'
    return spinner.start()
  },
  // printLogo() {
  //   let logo = '';
  //   for (let i = 0; i < LOGO.length; i++) {
  //     const char = LOGO[i];
  //     let candidate;
  //     switch (COLOR_MAP[i]) {
  //       case 'o':
  //         candidate = chalk.hex("#ee6f57")(char);
  //         break;
  //       case 'g':
  //         candidate = chalk.hex("#88d7c6")(char);
  //         break;
  //       case 'w':
  //         candidate = chalk.hex("#f6f5f5")(char);
  //         break;
  //       default:
  //         candidate = char;
  //         break;
  //     }
  //     logo += candidate;
  //   }
  //   console.log(logo);
  // },
  header(msg) {
    console.log(primary(msg));
  },

  info(msg) {
    console.log(secondary(msg));
  },

  text(msg) {
    console.log(neutral(msg));
  },

  error(msg) {
    console.log(emphasis(msg))
  },

  warn(msg) {
    console.log(emphasis(msg))
  },

  primary: (msg) => primary(msg),
  secondary: (msg) => secondary(msg),
  neutral: (msg) => neutral(msg),
  emphasis: (msg) => emphasis(msg),
  success: (msg) => success(msg)
}