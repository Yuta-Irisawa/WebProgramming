var btn = document.getElementById('btn');
btn.addEventListener('click',init);
function init(){
    var name = document.forms.id_form1.name.value;
    var gender = document.forms.id_form1.gender.value;
    var title = document.forms.id_form1.title.value;
    var content = document.forms.id_form1.content.value;

    document.write("<div style='width:100%; height:578px; text-align:center;'><h2>お問い合わせ内容確認</h2><table border='1' style='margin:0 auto;'><tr><td></td><td>内容</td></tr><tr><td>名前</td><td>" + name 
    + "</td></tr><tr><td>性別</td><td>" + gender + "</td></tr><tr><td>お問い合わせの件名</td><td>" + title 
    + "</td></tr><tr><td>お問い合わせ内容</td><td>" + content
    + "</td></tr></table><a href='contact.html' style='margin:20px;'>戻る</a>");
}