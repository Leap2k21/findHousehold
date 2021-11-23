let bair=document.querySelector('.bair')
let orts=document.querySelector('.orts')
let davhar=document.querySelector('.davhar')
let tsonh=document.querySelector('.tsonh')
let haalga = document.querySelector('.haalga')



let colors = ['#CD5C5C', '#F08080', '#FA8072', '#E9967A', '#FFA07A', '#DC143C', '#FF0000', '#B22222', '#8B0000', '#FFC0CB', '#FFB6C1', '#FF69B4', '#FF1493', '#C71585', '#DB7093', '#FF7F50', '#FF6347', '#FF4500', '#FF8C00', '#FFA500', '#FFD700', '#FFFF00', '#FFFFE0', '#FFFACD', '#FAFAD2', '#FFEFD5', '#FFE4B5', '#FFDAB9', '#EEE8AA', '#F0E68C', '#BDB76B', '#E6E6FA', '#D8BFD8', '#DDA0DD', '#EE82EE', '#DA70D6', '#FF00FF', '#FF00FF', '#BA55D3', '#9370DB', '#8A2BE2', '#9400D3', '#9932CC', '#8B008B', '#800080', '#663399', '#4B0082', '#7B68EE', '#6A5ACD', '#483D8B']

for(let i=0;i<3;i++){
    let orts = document.createElement('div');
    orts.classList.add('orts');
    bair.append(orts);
    for(let j=0;j<10;j++){
        let davhar = document.createElement('div');
        davhar.classList.add('davhar');
        davhar.id = 'davhar-' + ((i*10) + (j + 1))
        davhar.style.backgroundColor = colors[(10*i)+j]
        orts.prepend(davhar);
        for(let z=0;z<5;z++){
            let tsonh= document.createElement('div');
            tsonh.classList.add('tsonh');
            tsonh.id = 'tsonh-' + ((i * 10 * 5) + ( j * 5 ) + z + 1 )
            davhar.append(tsonh);
        }
    }
    let haalga = document.createElement('div')
    haalga.classList.add('haalga')
    orts.append(haalga)
}
function finding(){
    let active = document.querySelector('.active')
    if(active){
        active.classList.remove('active')
    }
    let input = document.querySelector('input')
    tsonh = document.querySelector('#tsonh-' + input.value)
    tsonh.classList.add('active')
    if(parseInt(input.value)%10===0){
        davhar = document.querySelector('#davhar-' + parseInt(input.value)/5)
        davhar.classList.add('active')
    }else{
        davhar = document.querySelector('#davhar-' + (parseInt(input.value)/5)+1)
        davhar.classList.add('active')
    }
    input.value = ""
    
}

