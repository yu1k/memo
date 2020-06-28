"use strict";

function main(){
    var student = {
        name: "名前",
        age: 10
    }
    console.log(student.age); //10が出力される
    
    student.age = 15;
    
    console.log(student.age); //15が出力される
}

main();
