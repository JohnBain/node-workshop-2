var SynonymAPI = require('./library/synonyms.js');
var request = require('request');
var prompt = require('prompt');
var colors = require('colors');

var syn1 = new SynonymAPI("c272336453182631b44cf03c0671b805");

prompt.start();
prompt.message = colors.blue("What word shall we look up today?");
prompt.get(['word'], function (err, result) {
    syn1.getSynonyms(result.word, function(word_obj){
        ("noun" in word_obj) ? console.log(colors.magenta("Noun synonyms: " + word_obj.noun.syn.join(', '))) : null;
        ("ant" in word_obj.noun) ? console.log("Noun antonyms: " + word_obj.noun.ant.join(', ')) : null;
        ("verb" in word_obj) ? console.log(colors.cyan("Verb synonyms: " + word_obj.verb.syn.join(', '))
        + "\n Verb antonyms: " + word_obj.verb.ant.join(', ')) : null;
        ("adjective" in word_obj) ? console.log(colors.blue("Adjective synonyms: " + word_obj.adjective.syn.join(', '))
         + "\n Adjective antonyms: " + word_obj.verb.ant.join(', ')) : null;
        ("sim" in word_obj) ? console.log(colors.purple("Similar terms: " + word_obj.verb.syn.join(', '))) : null; 
    });
});

//Note to self: Prettify results.