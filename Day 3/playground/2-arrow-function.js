// const square = function(x){
//     return x * x
// }

const { throwDeprecation } = require("node:process")

// const square = (x) => {
//     return x * x
// }

// const square = (x) => x * x
// console.log(square(5));


// const event = {
//     name: 'Birthday Party',
//     printGuestList : function (){
//         console.log('Guest list for ' +this.name)
//     }
// } 

const event = {
    name: 'Birthday Party',
    guestList: ['Andrew','Mike','Jen'],
    printGuestList() {
        console.log('Guest list for ' +this.name)
        this.guestList.forEach((guest) =>{
           console.log(guest + ' attending the ' +this.name)
        })
    }
} 
event.printGuestList()