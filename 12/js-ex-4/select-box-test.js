window.onload = function () {
  document.myForm.button1.onclick = function () {
    var isSelected = document.myForm.select1.options[0].selected;
    console.log("白: " + isSelected);
    isSelected = document.myForm.select1.options[1].selected;
    console.log("赤: " + isSelected);
    isSelected = document.myForm.select1.options[2].selected;
    console.log("黄: " + isSelected);
  };

  document.myForm.select1.onchange = function () {
    var selectedIndex = document.myForm.select1.selectedIndex;
    console.log("Index: " + selectedIndex);
    var selectedValue = document.myForm.select1.options[selectedIndex].value;
    console.log("Value: " + selectedValue);
    var selectedText = document.myForm.select1.options[selectedIndex].text;
    console.log("Text: " + selectedText);
  };
};