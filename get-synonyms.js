var SynonymAPI = require('./library/synonyms.js');
var request = require('request');
var prompt = require('prompt');
var colors = require('colors');

var syn1 = new SynonymAPI("c272336453182631b44cf03c0671b805");

prompt.start();
prompt.message = colors.blue("What word shall we look up today?");
prompt.get(['word'], function (err, result) {
    syn1.getSynonyms(result.word, function(n){console.log(n)});
});

//Note to self: Prettify results.