#!/usr/bin/env node

import Conf from 'conf';
import {program} from 'commander';

const config = new Conf({projectName: 'user'});
const user='user'
const schema={
    banking:{
        id:'',
        name:'',
        amount:0
    }
}
function create(id,name){
   
    config.set('id',id)
    config.set('name',name)
    config.set('balance',0)

}

function balance(id){
    console.log(config.get('name'))
    console.log(config.get('balance'))
}
function withdraw(id,amount){
    const rem=config.get('balance')-amount;
    config.set('balance',rem)
}
function deposite(id,amount){
    const new_bal=config.get('balance')+amount
    config.set('balance',new_bal)
}



program
    .command('CREATE <id> <name>')
    .description('Create new account')
    .action(create)

program
    .command('BALANCE <id>')
    .description('To check balance')
    .action(balance)
program
    .command('DEPOSITE <id> <amount>')
    .description('To deposite amount')
    .action(deposite)
program
    .command('WITHDRAW <id> <amount>')
    .description('To withdraw amount')
    .action(withdraw)


program.parse()

