"use strict";

function boolTemplate(){
    var myFalse = new Boolean(false);
    let a = 1;
    if(a == 1){
        myFalse = true;
    }
    else{
        myFalse;
    }
    console.log(myFalse);
}

function main(){
    boolTemplate();
}

main();