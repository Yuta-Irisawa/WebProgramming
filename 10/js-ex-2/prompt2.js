/*
「prompt2.html」の「見出し1」と「見出し2」の文字列を、
window.promptメソッドとdocument.getElmentByIdメソッドを利用して、
ユーザの入力で置換するプログラムを作成してください
*/

input1 = window.prompt("文字列を入力してください");
input2 = window.prompt("文字列を入力してください");

document.getElementById("h1_id").textContent = input1;
document.getElementById("h2_id").textContent = input2;    
