"use strict";

function getDayOfTheWeek(){
    //曜日の数値を取得
    var DayOfTheWeekNumber = new Date().getDay();

    //曜日の数値を文字に変換
    var DayOfTheWeek = null;
    if(DayOfTheWeekNumber == 1){
        DayOfTheWeek = "Monday";
    }
    else if(DayOfTheWeekNumber == 2){
        DayOfTheWeek = "Tuesday";
    }
    else if(DayOfTheWeekNumber == 3){
        DayOfTheWeek = "Wednesday";
    }
    else if(DayOfTheWeekNumber == 4){
        DayOfTheWeek = "Thursday";
    }
    else if(DayOfTheWeekNumber == 5){
        DayOfTheWeek = "Friday";
    }
    else if(DayOfTheWeekNumber == 6){
        DayOfTheWeek = "Saturday";
    }
    else if(DayOfTheWeekNumber == 7){
        DayOfTheWeek = "Sunday";
    }
    return DayOfTheWeek;
}
