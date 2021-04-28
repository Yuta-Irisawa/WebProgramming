// input変数にユーザからの入力を格納する
input = window.prompt("(1~3)の整数を入力してください");
/* input = Number(input);
if (input == 1) { // 1が入力された場合
    document.write("<h1>One</h1>");
} else if (input == 2) { //2が入力された場合
    document.write("<h1>Two</h1>");
} else if (input == 3) { //3が入力された場合
    document.write("<h1>Three</h1>");
} else { //それ以外の場合
    document.write("<h1>None</h1>");
} */

if (input == '1') { // 1が入力された場合
    document.write("<h1>One</h1>");
} else if (input == '2') { //2が入力された場合
    document.write("<h1>Two</h1>");
} else if (input == '3') { //3が入力された場合
    document.write("<h1>Three</h1>");
} else { //それ以外の場合
    document.write("<h1>None</h1>");
}