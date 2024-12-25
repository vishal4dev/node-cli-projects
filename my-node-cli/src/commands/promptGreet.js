import chalk from 'chalk';
import inquirer from 'inquirer';
import { showAsciiArt } from '../utils/showAsciiArt.js';

export const promptGreetCommand = (program) => {
    program
        .command('prompt-greet')
        .description('Asks user for their name and greets them')
        .action(() => {
            showAsciiArt('matrix');
            inquirer.prompt([
                {
                    type: 'input',
                    name: 'name',
                    message: 'What is your name?'
                }
            ]).then((answers) => {
                console.log(chalk.green(`Hello, ${answers.name}!`));
            });
        });
};
