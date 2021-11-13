let bair = document.querySelector('.bair');
let davhar, orts, door;
let ortsToo = 3, davharToo = 10, tsonhToo = 5;
let colors = ['#CD5C5C', '#F08080', '#FA8072', '#E9967A', '#FFA07A', '#DC143C', '#FF0000', '#B22222', '#8B0000', '#FFC0CB', '#FFB6C1', '#FF69B4', '#FF1493', '#C71585', '#DB7093', '#FF7F50', '#FF6347', '#FF4500', '#FF8C00', '#FFA500', '#FFD700', '#FFFF00', '#FFFFE0', '#FFFACD', '#FAFAD2', '#FFEFD5', '#FFE4B5', '#FFDAB9', '#EEE8AA', '#F0E68C', '#BDB76B', '#E6E6FA', '#D8BFD8', '#DDA0DD', '#EE82EE', '#DA70D6', '#FF00FF', '#FF00FF', '#BA55D3', '#9370DB', '#8A2BE2', '#9400D3', '#9932CC', '#8B008B', '#800080', '#663399', '#4B0082', '#7B68EE', '#6A5ACD', '#483D8B']

for(let i=0; i<ortsToo; i++){
    let orts = document.createElement('div');
    orts.classList = 'orts';
    for(j=0; j<davharToo; j++){
        if(j===0){
            let haalga = document.createElement('div');
            haalga.classList = "haalga";
            haalga.style.backgroundColor = colors[colors.length - (i+1)*10];
            orts.append(haalga);
        }
        let davhar = document.createElement('div');
        davhar.classList = 'davhar';
        davhar.style.backgroundColor = colors[i*davharToo + j];
        for(k=0; k<tsonhToo; k++){
            let tsonh = document.createElement('div');
            tsonh.classList = 'tsonh';
            tsonh.id = 'tsonh-' + (((i*davharToo*tsonhToo) + (j*tsonhToo) + k+1));
            davhar.append(tsonh);
        }
        orts.append(davhar);
    }
    bair.append(orts);
}

let $input = document.getElementById('input');
let $button = document.getElementById('button');
$button.addEventListener('click', function(){
    let numb = parseInt($input.value);
    if(numb > 0 && numb <= ortsToo * davharToo * tsonhToo){
        let ailDiv = document.querySelector('.active');
        if(ailDiv){
            ailDiv.classList.remove('active');
        }
        let ail = document.getElementById('tsonh-' + numb);
        console.log(ail);
        ail.classList.add("active");
    }
    else{
        alert("Oruulsan utga buruu baina!");
    }
})
