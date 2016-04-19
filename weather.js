var request = require('request');
var prompt = require('prompt');
var colors = require('colors');



var montreal_location = "https://maps.googleapis.com/maps/api/geocode/json?address=montreal";

prompt.start();
prompt.message = colors.rainbow("What is your location?");
prompt.get(['location'], function (err, result) {
    console.log(colors.blue("You are located in " + result.location));
    
    request(montreal_location, function(err, result){
            var res = JSON.parse(result.body);
            var mon_weather = "https://api.forecast.io/forecast/ee1e20db4b505825c34caf3f10b931ee/" + res.results[0].geometry.location.lat.toFixed(2) + "," + res.results[0].geometry.location.lng.toFixed(2);
            
            request(mon_weather, function(err, result){
            var resultObj = JSON.parse(result.body);
            console.log("Today's weather is:" + resultObj.currently.summary)
            
            var today = new Date();
            var today_iso = today.toISOString();
            console.log(today_iso)
            
})
            
    })
});

//I'm clocking out on this one for the moment. I have an incrementdate loop already written in TonicDev, and I'll add a colorizeWeather
//function to make the output pretty.

/*
Consider using MomentJS instead of native functions.

2. Using MomentJS:
var today = moment();
var tomorrow = moment(today).add(1, 'day');
(Beware that add modifies the instance you call it on, rather than returning a new instance, so today.add('days', 1) would modify today. That's why we start with a cloning op on var tomorrow = ....)
*/