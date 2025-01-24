const chalk = require('chalk')
// const note = require('./notes')
// const data =  note()
// console.log(data)


console.log(chalk.blue('success!'))
log(chalk.red('Hello', chalk.underline.bgBlue('world') + '!'));

console.log(chalk.green('I am a green line ' + chalk.blue.underline.bold('with a blue substring') +' that becomes green again!'));


const command = process.argv[2]
console.log(process.argv)
if(command === 'add'){
    console.log('Adding note!')
}
else if(command === 'remove'){
    console.log('Removing note!')
}
