import chalk from 'chalk';
import figlet from 'figlet';

export const showAsciiArt = (text) =>{
        console.log(chalk.yellow(figlet.textSync(text,{horizontalLayout:'full'})));
};

