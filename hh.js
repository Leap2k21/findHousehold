let input1 = document.getElementById('toot');
let input2 = document.getElementById('orts');
let input3 = document.getElementById('dawhar');
let input4 = document.getElementById('haalga');
let Entrande = 3;
let Floors = 10;
let Windows_per_floor = 5;
let house = document.querySelector('.hothon');
let toot, orts, dawhar, haalga;

for(let i = 0; i < Entrande; i ++){
    let entrance  = document.createElement('div');
    entrance.classList.add('entrance');

    for(let j = 0; j < Floors; j ++){
        let floor = document.createElement('div');
        floor.classList.add('floor');

        for(let z = 0; z < Windows_per_floor; z ++){
            let window = document.createElement('window');

            floor.append(window);
        }
        entrance.append(floor);
    }
    door = document.createElement('div');
    door.classList.add('door');
    entrance.append(door);

    entrance.append();

    house.append(entrance);
}

function shalga() {
    toot = parseInt(input1.value);
    if (toot <= 0 || toot > 150) {
        alert("buruu toot oruulsan bn ahin shalga");
    }
    input2.value = (Math.ceil(toot / 50));
    orts = parseInt(input2.value);
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
    input4.value = (Math.round(toot % 5));
    if (toot % 5 == 0) {
        dawhar = parseInt(input4.value);
        input4.value = 5;
    }
}