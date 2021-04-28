window.onload = function() {
    var bodyNode = document.body;
    var h2Node = bodyNode.childNodes[3];
    console.log(h2Node.firstChild.nodeValue);
    bodyNode.removeChild(h2Node);
}
