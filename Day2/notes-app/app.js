const chalk = require('chalk')
const yargs = require('yargs')
const getNotes = require('./notes.js')

//customize yargs version
yargs.version('1.1.0')

//add,remove,read,list
//create add command
yargs.command({
    command: 'add',
    describe:'Add new note',
    builder:{
       title:{
           describe:'Note title',
           demandOption:true,
           type:'string'
       }
    },
    handler: function(argv){
        console.log('Title:'+argv.title)
    }
})

//create remove command
yargs.command({
    command:'remove',
    describe:'Remove a note',
    handler: function(){
        console.log("Removing the note!")
    }
})

yargs.command({
    command:'list',
    describe: 'lis a note',
    handler:function(){
        console.log('Listing a note!')
    }
})

yargs.command({
    command:'read',
    describe: 'read a note',
    handler:function(){
        console.log('reading a note!')
    }
})

// console.log(process.argv)
console.log(yargs.argv)
