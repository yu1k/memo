//現在の時間を値として取得できる記述.
new Date();



//現在の年を取得し、yearに入れる
var year = new Date().getFullYear();
//現在の月を取得し、monthに入れる
var month = new Date().getMonth() + 1; //0始まりなので。
//現在の日を取得し、dayに入れる
var day = new Date().getDate();
//現在の曜日の数値を取得し、DayOfTheWeekNumberに入れる
var DayOfTheWeekNumber = new Date().getDay();

//使う
//現在の曜日を取得する(英語の曜日)
var DayOfTheWeek = getDayOfTheWeek();

//現在の曜日を取得する(英語の曜日)
var JpDayOfTheWeek = getJpDayOfTheWeek();
