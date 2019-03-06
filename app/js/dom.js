function PaintHealth() {
    ClearDOM();
    for(let i = 0; i < health; i ++) {
        let healthBlock = document.createElement('div');
        let img = document.createElement('img');
        img.src = "./img/life.png";
        healthBlock.appendChild(img);
        healthBlock.classList.add('life');
        document.querySelector('#results-wrapper').appendChild(healthBlock);
    }
}

function ClearDOM() {
    let lifes = document.querySelectorAll('.life');
    for( let i = 0; i< lifes.length; i++) {
        lifes[i].remove();
    }
}

function PaintScore() {
    
}