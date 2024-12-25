#!/usr/bin/env node
import { program } from "commander";
import { getUserData } from "../src/commands/getUserData.js";

program.version("1.0.0")
       .description("A CLI tool to get user");

//Commands
getUserData(program);

program.parse(process.argv);
