var request = require('request');

function SynonymAPI(APIkey) {
    this.APIkey = APIkey
} 

//var syn1 = new SynonymAPI("c272336453182631b44cf03c0671b805");

SynonymAPI.prototype.getSynonyms = function(str, callback){
    var API_JSON = "http://words.bighugelabs.com/api/2/" + this.APIkey + "/" + str + "/json";
    request(API_JSON, function(err, result) {
        if (err){
            throw(callback);
        }
        else{
        var res = JSON.parse(result.body);
        callback(res);
        }
    });
};
    
//syn1.getSynonyms("dog", function(n){console.log(n)});


module.exports = SynonymAPI;
