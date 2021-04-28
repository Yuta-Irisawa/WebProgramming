var dayOfTheWeek = new Array(7);
dayOfTheWeek[0] = "Sunday";
dayOfTheWeek[1] = "Monday";
dayOfTheWeek[2] = "Tuesday";
dayOfTheWeek[3] = "Wednesday";
dayOfTheWeek[4] = "Thursday";
dayOfTheWeek[5] = "Friday";
dayOfTheWeek[6] = "Saturday";

// 上記と同じ命令
// var dayOfTheWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

// length プロパティにより配列の要素数が取得できる
console.log(dayOfTheWeek.length);

//配列のすべての要素を出力する
for (var i = 0; i < dayOfTheWeek.length; i++) {
    document.write(dayOfTheWeek[i], "<br>");
}
