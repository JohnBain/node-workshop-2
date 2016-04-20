var SynonymAPI = require('./library/synonyms.js');
var request = require('request');
var prompt = require('prompt');
var colors = require('colors');

var syn1 = new SynonymAPI("5ac6284f3455459ef6788ab04ddf82a6");

prompt.start();
prompt.message = colors.blue("What word shall we look up today?");
prompt.get(['word'], function (err, result) {
    syn1.getSynonyms(result.word, function(word_obj){
    if ("noun" in word_obj){
       ("syn" in word_obj.noun) ? console.log(colors.magenta("Noun synonyms: " + word_obj.noun.syn.join(', '))) : null;
       ("ant" in word_obj.noun) ? console.log("Noun antonyms: " + word_obj.noun.ant.join(', ')) : null;

    };
    
    if ("verb" in word_obj){
       ("syn" in word_obj.verb) ? console.log(colors.cyan("Verb synonyms: " + word_obj.verb.syn.join(', '))) : null;
       ("ant" in word_obj.verb) ? console.log("Verb antonyms: " + word_obj.verb.ant.join(', ')) : null;
    };
    
    if ("adjective" in word_obj){
       ("syn" in word_obj.verb) ? console.log(colors.blue("Adjective synonyms: " + word_obj.adjective.syn.join(', '))) : null;
       ("ant" in word_obj.verb) ? console.log("Adjective antonyms: " + word_obj.adjective.ant.join(', ')) : null;
    }
    
    if ("sim" in word_obj){
        console.log(colors.purple("Similar terms: " + word_obj.verb.syn.join(', ')));
    }

    });
});

