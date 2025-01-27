const fs = require('fs')
const book = {
    title:'Ego is the Enemy',
    author:'Ryan Holiday'
}

const bookJSON = JSON.stringify(book)
// console.log(bookJSON)
// const parsedData = JSON.parse(bookJSON)
// console.log(parsedData)
// console.log(parsedData.author)

// fs.writeFileSync('1-json.json',bookJSON)
// const dataBuffer = fs.readFileSync('1-json.json')
// const dataJSON = dataBuffer.toString()  //convert the json into string
// const data = JSON.parse(dataJSON) //convert data into object
// console.log(data.title) //so we can access property 


const dataBuffer = fs.readFileSync('1-json.json')
const dataJSON = dataBuffer.toString()
const data = JSON.parse(dataJSON)

data.name = 'Mike'
data.age = 50

const userJSON = JSON.stringify(data)
fs.writeFileSync('1-json.json',userJSON)

