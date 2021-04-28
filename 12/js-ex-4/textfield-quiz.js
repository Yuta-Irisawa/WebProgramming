window.onload = function () { // HTML文書の読み込みが完了した時に下記の命令が実行されるようにする
    // ボタンがクリックされた時に下記の命令が実行されるようにする
    document.myForm.button1.onclick = function () {
        // テキストボックスへの入力をanswer変数に格納する
        var answer = document.myForm.text1.value;

        // answerの値が「"3"」の場合は、「正解です。」と表示する。
        if (answer === "3") {
            document.getElementById("answer").textContent = "正解です。";
        // answerの値が「"3"」以外の場合は、「不正解です。正解は「3. break文」です。」と表示する。
        } else {
            document.getElementById("answer").textContent = "不正解です。正解は「3. break文」です。";
        }
    }
}
