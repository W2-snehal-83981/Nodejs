//const request = require('postman-request')
const forecast = require('./utils/forecast')
const geocode=require('./utils/geocode')
const address = process.argv[2]

if(!address){
   console.log('Please provide an address')
}else{
   geocode(address,(error,{latitude,longitude,location}={})=>{
      if(error){
         return console.log(error)
      }
      forecast(longitude,latitude,(error,forecastdata)=>{
         if(error){
            return console.log(error)
         }
         console.log(location)
         console.log(forecastdata)
      })
   })

}

console.log(process.argv)






// const url = 'https://api.weatherstack.com/current?access_key=3a52655a50b8de184acf0b74ccce47f3&query=18.5913,73.7389'

// // request({url:url}, (error,response)=>{
// //    //console.log(response)
// //    const data  = JSON.parse(response.body)
// //    console.log(data.current)
// // })

// request({url:url,json:true}, (error,response)=>{
//    if(error){
//       console.log('Unable to connect to weather service!')
//    }
//    else if(response.body.error){
//       console.log('Unable to find location.')
//    }
//    else{
//       console.log(response.body.current.weather_descriptions[0]+'. It is currently '+response.body.current.temperature+ ' degress out. It feels like '+ response.body.current.feelslike+ '% chance of rain.')
//    }
// })



