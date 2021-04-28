window.onload = function() {
    document.myForm.button1.onclick = function() {
        if (document.myForm.options.value === "break") {
            document.getElementById("answer").textContent = "正解です。";
        } else {
            document.getElementById("answer").textContent = "不正解です。正解は「3. break文」です。";
        }
    }
}
