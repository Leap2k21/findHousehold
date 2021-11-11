let input1 = document.getElementById('toot');
let input2 = document.getElementById('orts');
let input3 = document.getElementById('dawhar');
let input4 = document.getElementById('haalga');
let toot, orts, dawhar, haalga;

function shalga() {
    toot = parseInt(input1.value);
    if (toot <= 0 || toot > 150) {
        return;
    }
    orts = parseInt(input2.value);
    input2.value = (Math.ceil(toot / 50));
    if (orts === 1) {
        dawhar = parseInt(input3.value);
        input3.value = (Math.ceil(toot / 5));
    }
    if (orts === 2) {
        toot = toot - 50;
        dawhar = parseInt(input3.value);
        input3.value = (Math.ceil(toot / 5));
    }
    if (orts === 3) {
        toot = toot - 100;
        dawhar = parseInt(input3.value);
        input3.value = (Math.ceil(toot / 5));
    }
    haalga = parseInt(input4.value);
    input4.value = (Math.round(toot % 5));
    if (toot % 5 == 0) {
        dawhar = parseInt(input4.value);
        input4.value = 5;
    }
}