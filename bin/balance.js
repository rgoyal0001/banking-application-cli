#!/usr/bin/env node
import Conf from 'conf';
import {program} from 'commander';
const config = new Conf({projectName: 'user'});


function balance(id){
    const data=config.get(`${id}`)
    if(data){
        console.log(config.get(`${id}.name`),config.get(`${id}.balance`))
    }
    else {
        console.log('No any acount found with this account number...Please create an account')
    }
}


program
    .command('ACC <id>')
    .description('To check balance')
    .action(balance) 

program.parse()

