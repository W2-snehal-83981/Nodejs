const chalk = require('chalk')
const yargs = require('yargs')
const notes = require('./notes.js')

//create add command
yargs.command({
    command: 'add',
    describe:'Add new note',
    builder:{
       title:{
           describe:'Note title',
           demandOption:true,
           type:'string'
       },
       body:{
           describe:'Note body',
           demandOption: true,
           type:'string'
       },
    },
    handler: function(argv){
        // console.log('Title:'+argv.title)
        // console.log('Body:' + argv.body)
        notes.addNote(argv.title , argv.body)
    }
})

//remove command
yargs.command({
    command:'remove',
    describe:'Remove a note',
    builder:{
        title:{
            describe: 'Note title',
            demandOption: true,
            type:'string'
        },
    },
    handler: function(argv){
        // console.log("Removing the note!")
        notes.removeNote(argv.title)
    }
})

console.log(yargs.argv)