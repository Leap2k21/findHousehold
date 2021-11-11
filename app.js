let bair = document.querySelector('.bair');
let davhar, orts, tsonh;
// let davhars = document.querySelectorAll('.davhar');
// let orts = document.querySelectorAll('.orts');
let ortsToo = 3, davharToo = 10, tsonhToo = 5;
let colors = ['#CD5C5C', '#F08080', '#FA8072', '#E9967A', '#FFA07A', '#DC143C', '#FF0000', '#B22222', '#8B0000', '#FFC0CB', '#FFB6C1', '#FF69B4', '#FF1493', '#C71585', '#DB7093', '#FF7F50', '#FF6347', '#FF4500', '#FF8C00', '#FFA500', '#FFD700', '#FFFF00', '#FFFFE0', '#FFFACD', '#FAFAD2', '#FFEFD5', '#FFE4B5', '#FFDAB9', '#EEE8AA', '#F0E68C', '#BDB76B', '#E6E6FA', '#D8BFD8', '#DDA0DD', '#EE82EE', '#DA70D6', '#FF00FF', '#FF00FF', '#BA55D3', '#9370DB', '#8A2BE2', '#9400D3', '#9932CC', '#8B008B', '#800080', '#663399', '#4B0082', '#7B68EE', '#6A5ACD', '#483D8B']

for (let i = 0; i < ortsToo; i ++) {
    let newOrts = document.createElement('div');
    newOrts.classList.add('orts');
    newOrts.id = 'orts-' + i;
    // newOrts.setAttribute('class', 'hello world')
    bair.append(newOrts);
    orts = document.querySelectorAll(".orts");

    for(let k=0; k < davharToo; k++){
        let newDavhar = document.createElement('div');
        newDavhar.classList.add('davhar');
        newDavhar.id = 'davhar-' + k;
        orts[i].append(newDavhar);
        davhar = document.querySelectorAll(".davhar") 
        
        for(let l=0; l < tsonhToo; l++){
            let newTsonh = document.createElement('div');
            newTsonh.classList.add('tsonh');
            newTsonh.id = 'tsonh-' + l;
            davhar[k].append(newTsonh);
        }
    }
}

for (let i = 0; i < davhar.length; i ++) {
    davhar[i].style.backgroundColor = colors[i];
}

// Draw doors
for (let i = 0; i < orts.length; i ++) {
    let door = document.createElement('div')
    door.classList.add('haalga');
    orts[i].append(door)
}

for (let i = door.length; i > 0; i --) {
    door[i].style.backgroundColor = colors[colors.length-1-i];
}
