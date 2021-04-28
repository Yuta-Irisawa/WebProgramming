window.onload = function() {
    var bodyNode = document.body;
    var h2Node = document.createElement("h2");
    var h2TextNode = document.createTextNode("h2要素の追加")
    h2Node.appendChild(h2TextNode);
    bodyNode.appendChild(h2Node);

//    var h3Node = document.createElement("？");
//    var h3TextNode = document.createTextNode("h3要素の追加")
//    ？.appendChild(？); // h3Nodeにテキストノードを追加
//    ？.appendChild(？);  // body要素の子要素のh3要素を追加
}
