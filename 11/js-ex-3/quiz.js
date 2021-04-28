window.onload = function () {
    setTimeout(function () {
        // ユーザからの入力をanswer変数に格納する
        answer = window.prompt("正解番号を入力してください");
        // answerの値が「"3"」の場合は、「正解です。」と表示する。
        if(answer == '3'){
            document.getElementById("answer").textContent = "正解です。";
        }
        // answerの値が「"3"」以外の場合は、
        // 「不正解です。正解は「3. break文」です。」と表示する。
        else{
            document.getElementById("answer").textContent = "不正解です。正解は「3.break文」です。";
        }


    }, 100);
}
