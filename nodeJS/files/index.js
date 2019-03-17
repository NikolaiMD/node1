// using module file system

var fs = require('fs');//globally installed

//write the text "HELLO FILE" inside hello.txt
fs.writeFileSync("./hello.txt","Hello file");
setTimeout(function(){
    fs.unlinkSync("./hello.txt");
}, 5000);