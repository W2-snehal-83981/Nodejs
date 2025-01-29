const request=require('request')
const forecast=(latitude,longitude,callback)=>{
    const url='http://api.weatherstack.com/current?access_key=3a52655a50b8de184acf0b74ccce47f3&query='+latitude+','+longitude
    request({url,json:true},(error,{body})=>{
        if(error)
        {
           callback('unable to connect to weather service!',undefined)
        }else if(body.error)
        {
          callback('unable to find location',undefined)
        }else{
          callback(undefined,body.current.weather_descriptions[0]+'. It is currently '+body.current.temperature+ ' degress out. It feels like '+ body.current.feelslike+ '% chance of rain.')
        }
    })
}
module.exports=forecast