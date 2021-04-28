window.onload = function() {
    // <!DOCTYPE html> のノード名「html」を表示
    console.log(document.firstChild.nodeName);
    // <html lang="ja">のノード名「HTML」を表示
    console.log(document.lastChild.nodeName);
    // HTMLノードを変数に格納
    var htmlNode = document.lastChild;
    // head要素のノード名「HEAD」を表示
    console.log(htmlNode.firstChild.nodeName);
    // body要素のノード名「BODY」を表示
    console.log(htmlNode.lastChild.nodeName);
    var bodyNode = htmlNode.lastChild;
    // 改行やスペースなどはテキストノードとして処理される
    console.log(bodyNode.childNodes[0].nodeName);
    // h1要素のノード名「H1」を表示
    console.log(bodyNode.childNodes[1].nodeName);
    // h1要素の値を表示
    console.log(bodyNode.childNodes[1].firstChild.nodeValue);
}
