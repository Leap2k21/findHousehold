
let bair = document.querySelector('.bair');

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

let orts = document.querySelectorAll('.orts');
for (let i = 0; i < orts.length; i ++) {
    let door = document.createElement('div')
    door.classList.add('haalga');
    orts[i].append(door)
}

let davhar = document.querySelectorAll('.davhar');
let colors = ['#CD5C5C', '#F08080', '#FA8072', '#E9967A', '#FFA07A', '#DC143C', '#FF0000', '#B22222', '#8B0000', '#FFC0CB', '#FFB6C1', '#FF69B4', '#FF1493', '#C71585', '#DB7093', '#FF7F50', '#FF6347', '#FF4500', '#FF8C00', '#FFA500', '#FFD700', '#FFFF00', '#FFFFE0', '#FFFACD', '#FAFAD2', '#FFEFD5', '#FFE4B5', '#FFDAB9', '#EEE8AA', '#F0E68C', '#BDB76B', '#E6E6FA', '#D8BFD8', '#DDA0DD', '#EE82EE', '#DA70D6', '#FF00FF', '#FF00FF', '#BA55D3', '#9370DB', '#8A2BE2', '#9400D3', '#9932CC', '#8B008B', '#800080', '#663399', '#4B0082', '#7B68EE', '#6A5ACD', '#483D8B']
for (let i = 0; i < davhar.length; i ++) {
        davhar[i].style.backgroundColor = colors[i];
    }