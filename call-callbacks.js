var firstChar = function(string, callback) {
    console.log("Wait..")

    var callback = setTimeout(function() {
        console.log(string.charAt(0));
    }, 1000);   
    return string.charAt(0);
};



var lastChar = function(string, callback) {
    console.log("Wait..")
    
    var callback = setTimeout(function() {
        console.log(string.slice(-1));
    }, 1000);   
    return string.slice(-1)
};

var getFirstAndLast = function(string, callback){
    console.log(firstChar(string) + lastChar(string)) 
}

  getFirstAndLast("hello", function(firstLast) {
    console.log(firstLast)})