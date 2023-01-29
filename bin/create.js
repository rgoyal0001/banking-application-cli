#!/usr/bin/env node
import Conf from 'conf';
import {program} from 'commander';
const config = new Conf({projectName: 'user'});

function create(id,name){
    config.set(`${id}.id`,id)
    config.set(`${id}.name`,name)
    config.set(`${id}.balance`,0)
}

program
    .command('ACC <id> <name>')
    .description('Create new account')
    .action(create)

program.parse()

