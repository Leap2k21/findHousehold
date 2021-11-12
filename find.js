let bair = document.querySelector('.bair');
let orts = document.querySelectorAll('.orts');
let haalga = document.querySelectorAll('.haalga');
let davhar = document.querySelectorAll('.davhar');
let tsonh = document.querySelectorAll('.tsonh');

for (let i = 0; i < 3; i++) {
    neworts = document.createElement("div");
    neworts.classList.add('orts');
    bair.append(neworts);
    for (let i = 0; i < 10; i++) {
        newdavhar = document.createElement("div");
        newdavhar.classList.add('davhar');
        neworts.append(newdavhar);
        for (let i = 0; i < 5; i++) {
            newtsonh = document.createElement("div");
            newtsonh.classList.add('tsonh');
            newdavhar.append(newtsonh);

        }
    }
}
