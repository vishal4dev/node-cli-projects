#!/usr/bin/env node
import { program } from 'commander';
import { greetCommand } from '../src/commands/greet.js';
import { promptGreetCommand } from '../src/commands/promptGreet.js';
import { chooseCommand } from '../src/commands/choose.js';

program.version('1.0.0').description('My Node CLI');

// Register commands
greetCommand(program);
promptGreetCommand(program);
chooseCommand(program);

program.parse(process.argv);
