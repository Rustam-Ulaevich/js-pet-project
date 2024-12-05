document.addEventListener('keydown', keyDown)  // попробовать 'click'

let x = 200   // создать после switch/case
let y = 200
let delta = 10

function keyDown(event) {

    //console.log(event);      //сначала изучить объект event в консоле

    // if(event.keyCode === 37){   // лучше использовать switch case
    //     console.log('влево');        
    // }

    switch (event.keyCode){
        case 37: console.log('влево'); moveLeft(); break;       // не забыть про break
        case 38: console.log('вверх'); moveUp(); break;
        case 39: console.log('вправо'); moveRight(); break;
        case 40: console.log('вниз'); moveDown(); break;
        // case 32: document.getElementById('square').style.backgroundColor = 'red'; break;   // ДОБАВИТЬ КАК САМОСТАЯТЕЛЬНУЮ РАБОТУ

    }
    document.getElementById('square').style.left = x + 'px'   // добавить в самом конце
    document.getElementById('square').style.top = y + 'px'   
}

function moveLeft(){
    x = x - delta
}
function moveRight(){  // эти ф-ции пусть сами напишут
    x = x + delta
}
function moveUp(){
    y = y - delta
}
function moveDown(){
    y = y + delta
}


document.getElementById('square').addEventListener('mouseout', 
    () => {document.getElementById('square').style.backgroundColor = 'red'}
)
document.getElementById('square').addEventListener('mouseover', 
    () => {document.getElementById('square').style.backgroundColor = 'green'}
)
