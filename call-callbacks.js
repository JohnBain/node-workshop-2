var firstChar = function(string, callback) {
    console.log("Wait..")
    
    var stringy = string;
    
    var callback = setTimeout(function() {
        console.log(stringy.charAt(0));
    }, 1000);   
};


firstChar("turtle")