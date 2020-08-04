"use strict";

const birthYear = ""; //誕生日を入力

const nowYear = new Date().getFullYear();

function main(){
    let age = 0;
    for(let i = birthYear; i < nowYear; i++){
        age++;
    }
    console.log(age);
}

main();
