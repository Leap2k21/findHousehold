let entrance, floor , door;
let $residence = document.querySelector('#residence');

let colors = ['#CD5C5C', '#F08080', '#FA8072', '#E9967A', '#FFA07A', '#DC143C', '#FF0000', '#B22222', '#8B0000', '#FFC0CB', '#FFB6C1', '#FF69B4', '#FF1493', '#C71585', '#DB7093', '#FF7F50', '#FF6347', '#FF4500', '#FF8C00', '#FFA500', '#FFD700', '#FFFF00', '#FFFFE0', '#FFFACD', '#FAFAD2', '#FFEFD5', '#FFE4B5', '#FFDAB9', '#EEE8AA', '#F0E68C', '#BDB76B', '#E6E6FA', '#D8BFD8', '#DDA0DD', '#EE82EE', '#DA70D6', '#FF00FF', '#FF00FF', '#BA55D3', '#9370DB', '#8A2BE2', '#9400D3', '#9932CC', '#8B008B', '#800080', '#663399', '#4B0082', '#7B68EE', '#6A5ACD', '#483D8B']

for (let i = 0; i < 3; i ++) {
   let $newEntrance = document.createElement('div');
    $newEntrance.classList.add('entrance');
    $newEntrance.id = 'entrance-' + i;
    $newEntrance.setAttribute('class', 'entrance')
    $residence.append($newEntrance);

    

    
    

}
let $entrance = document.querySelectorAll('.entrance')
for (let k = 0; k < 10; k ++) {
    let $newfloor = document.createElement('div');
     $newfloor.classList.add('floor');
     $newfloor.id = 'floor-' + k;
     $newfloor.setAttribute('class', 'floor')
     $entrance.append($newfloor); }
