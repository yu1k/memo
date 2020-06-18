"use strict";

function getJpDayOfTheWeek(){
    //曜日の数値を取得
    var DayOfTheWeekNumber = new Date().getDay();

    //曜日の数値を日本の呼び方に変換
    var JpDayOfTheWeek = null;
    if(DayOfTheWeekNumber == 1){
        JpDayOfTheWeek = "月曜日";
    }
    else if(DayOfTheWeekNumber == 2){
        JpDayOfTheWeek = "火曜日";
    }
    else if(DayOfTheWeekNumber == 3){
        JpDayOfTheWeek = "水曜日";
    }
    else if(DayOfTheWeekNumber == 4){
        JpDayOfTheWeek = "木曜日";
    }
    else if(DayOfTheWeekNumber == 5){
        JpDayOfTheWeek = "金曜日";
    }
    else if(DayOfTheWeekNumber == 6){
        JpDayOfTheWeek = "土曜日";
    }
    else if(DayOfTheWeekNumber == 7){
        JpDayOfTheWeek = "日曜日";
    }
    return JpDayOfTheWeek;
}
