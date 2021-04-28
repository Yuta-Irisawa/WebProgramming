window.onload = function () {
  document.myForm.button1.onclick = function () {
    var isChecked = document.myForm.color[0].checked;
    console.log("項目1の選択状態: " + isChecked);
    var value = document.myForm.color[0].value;
    console.log("項目1のvalue: " + value);
    isChecked = document.myForm.color[1].checked;
    console.log("項目2の選択状態: " + isChecked);
    value = document.myForm.color[1].value;
    console.log("項目2のvalue: " + value);
    isChecked = document.myForm.color[2].checked;
    console.log("項目3の選択状態: " + isChecked);
    value = document.myForm.color[2].value;
    console.log("項目3のvalue: " + value);
  };
};
