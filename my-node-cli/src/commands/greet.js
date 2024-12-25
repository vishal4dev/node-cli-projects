import chalk from 'chalk';
import {showAsciiArt}  from '../utils/showAsciiArt.js';

export const greetCommand = (program) => {
    program
        .command('greet <name>')
        .description('Greets the user by their name')
        .option('-u, --uppercase', 'prints name in uppercase')
        .action((name, options) => {
            showAsciiArt('Hello');
            const greeting = options.uppercase ? name.toUpperCase() : name;
            console.log(chalk.green(`Hello, ${greeting}!`));
        });
};
