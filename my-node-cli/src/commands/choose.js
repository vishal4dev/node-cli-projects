import chalk from 'chalk';
import inquirer from 'inquirer';

export const chooseCommand = (program) => {
    program
        .command('choose')
        .description('Asks the user to choose from options')
        .action(() => {
            inquirer.prompt([
                {
                    type: 'list',
                    name: 'choice',
                    message: 'Choose one:',
                    choices: ['Messi', 'Ronaldo', 'Neymar']
                }
            ]).then((answers) => {
                console.log(chalk.green(`You chose ${answers.choice}`));
            });
        });
};
