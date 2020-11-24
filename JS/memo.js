//現在の時間を値として取得できる記述.
new Date();



//現在の年を取得し、yearに入れる
var year = new Date().getFullYear();
//現在の月を取得し、monthに入れる
var month = new Date().getMonth() + 1; //0始まりなので。
//現在の日を取得し、dayに入れる
var day = new Date().getDate();

//xx時を取得しhourに入れる
var hour = new Date().getHours();
//xx分を取得しminutesに入れる
var minutes = new Date().getMinutes();
//xx秒を取得しsecondsに入れる
var seconds = new Date().getSeconds();

//現在の曜日の数値を取得し、DayOfTheWeekNumberに入れる
var DayOfTheWeekNumber = new Date().getDay();

//使う
//現在の曜日を取得する(英語の曜日)
var DayOfTheWeek = getDayOfTheWeek();

//現在の曜日を取得する(英語の曜日)
var JpDayOfTheWeek = getJpDayOfTheWeek();

//文字列として宣言された数字を、整数値に変換する関数
let a = "100";
let result = parseInt(a);

//変数名と値を同時に出力できるからデバッグ時に便利
let hoge = 100;
console.log({hoge});

//コンピュータで扱えるNumberの型の最大値を出力
console.log(Number.MAX_SAFE_INTEGER);
