function exchange(doll, rate) {
    return doll * rate;
}

function sum(begin, end){
    var sum = 0;
    var i;
    for(i=begin;i<=end;i++){
        sum += i;
    }
    return sum;
}

var theRate = 106; // 為替レート
var theDoll = 10;
var theYen = exchange(theDoll, theRate);

console.log(theDoll + "ドルは" + theYen + "円です。");

var Sum = sum(1, 10);
console.log("総和は" + Sum + "です。");