#!/usr/bin/env node
import Conf from 'conf';
import {program} from 'commander';
const config = new Conf({projectName: 'user'});

function withdraw(id,amount){
    const data=config.get(`${id}`)
    if(data){
        const av=Number(config.get(`${id}.balance`))
        const new_bal=av-Number(amount);
        config.set(`${id}.balance`,new_bal)
    }
    else {
        console.log('No any acount found with this account number...Please create an account')
    }
    
}

program
    .command('ACC <id> <amount>')
    .description('To withdraw amount')
    .action(withdraw)

program.parse()

