window.onload = function () {
  document.myForm.select1.onclick = function () { // 項目が選択された時に下記の命令が実行される
    // 選択された項目の位置をselectedIndex変数に格納する
    var selectedIndex = document.myForm.select1.value;
    // 選択された項目の位置が正解の項目の位置と一致しているかどうかをチェックし、
    // 画面上にメッセージを表示する
    if (selectedIndex === "break") {
      document.getElementById("answer").textContent = "正解です。";
    } else {
      document.getElementById("answer").textContent = "不正解です。正解は「3. break文」です。";
    }
  };
};
