const request=require('request')
const geocode=(address,callback)=>{

    const url='https://api.maptiler.com/geocoding/'+address+'.json?key=HpuuMVZWIh0gkqyxPBSv'
    request(
        {url:url,json:true},(error,{body})=>{

        if(error)
        {
          callback('unable to connect to location services!',undefined)
        }else if(body.features.length===0)
        {
            callback('unable to find to location .Try to find another search!',undefined)
        }
        else{
            callback(undefined,{
                latitude: body.features[0].center[0],
                longitude: body.features[0].center[1],
                location: body.features[1].place_name
            })

        }
})
}
module.exports=geocode