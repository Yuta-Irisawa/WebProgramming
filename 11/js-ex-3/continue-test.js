// 6で割り切れる数を表示
var max = 100;
for (var i = 1; i < max; i++) {
    if ((i % 6) != 0) {
        continue;
    }
    console.log(i);
}
