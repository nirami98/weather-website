const request = require('postman-request')

const forecast = (latitude, longitude, callback) => {

    // const url = 'http://api.weatherstack.com/current?access_key=f639f5d583cb8b93563e0539f6e5d3f9&query=23.0225,72.5714';

    const url = 'http://api.weatherapi.com/v1/current.json?key=0e16d3633ea140cd8d4145406222104&q=' + latitude + ',' + longitude;

    request({url, json: true}, (error, {body}) => {
        if(error) {
            callback('Unable to connect to the weather service', undefined)
        } else if(body.error) {
            callback('Unable to find location', undefined);
        } else {
            callback(undefined, body.current.condition.text+'. It is currently '+ body.current.temp_c +' degrees out. It feels like ' + body.current.feelslike_c + 'degrees out. The humidity is ' + body.current.humidity + '%.');
        }
    })
}

module.exports = forecast