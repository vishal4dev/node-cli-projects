import { program } from "commander";
import chalk from "chalk";
import axios from "axios";

export const getUserData = (program) => {
    program
        .command("user <username>")
        .alias("u")
        .description("Get user data")
        .action(async (username) =>{
            const res =  await axios.get(`https://api.github.com/users/${username}`);
            try{

                if(res.status !== 200){
                    console.log(chalk.red("User not found"));
                    return;
                }
                
            console.log(`
                Name: ${res.data.name || "N/A"}
                Bio: ${res.data.bio || "N/A"}
                Public Repositories: ${res.data.public_repos}
                Followers: ${res.data.followers}
                Following: ${res.data.following}
              `);
            }catch{
                console.log(chalk.red("User not found"));
            }

        })
};

program.parse(process.argv);