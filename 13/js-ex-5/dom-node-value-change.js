window.onload = function() {
    var htmlNode = document.lastChild;
    var bodyNode = htmlNode.lastChild;
    var h1Node = bodyNode.childNodes[1];
    h1Node.firstChild.nodeValue = "DOMによるH1要素の値変更";
//    var h2Node = bodyNode.childNodes[？];
//    h2Node.firstChild.nodeValue = "DOMによるH2要素の値変更";
}
