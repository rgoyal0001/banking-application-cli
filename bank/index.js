#!/usr/bin/env node
import Conf from 'conf';
import {program} from 'commander';
const config = new Conf({projectName: 'user'});

function create(id,name){
    config.set(`${id}.id`,id)
    config.set(`${id}.name`,name)
    config.set(`${id}.balance`,0)
}

function balance(id){
    console.log(config.get(`${id}.name`),config.get(`${id}.balance`))
}
function withdraw(id,amount){
    const av=Number(config.get(`${id}.balance`))
    const new_bal=av-Number(amount);
    config.set(`${id}.balance`,new_bal)
}

function deposite(id,amount){
    const av=Number(config.get(`${id}.balance`))
    const new_bal=av+Number(amount)
    config.set(`${id}.balance`,new_bal)
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

