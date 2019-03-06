
function Apple (color) {

    this.color = color,
    this.x = Number(Math.floor(Math.random() * canvas.width / 10 ) + '0'),
    this.y = Number(Math.floor(Math.random() * canvas.width / 10 ) + '0')

}

let apple1 = new Apple('green');
let apple2 = new Apple('blue');
let apple3 = new Apple('orange');
let apple4 = new Apple('red');
let apple5 = new Apple('teal');

function GotApple(apple) {

    SnakeGenerate();

    apple.x = Number(Math.floor(Math.random() * canvas.width / 10 ) + '0');
    apple.y = Number(Math.floor(Math.random() * canvas.width / 10 ) + '0');

    ctx.rect(apple.x, apple.y, 10, 10);
    ctx.stroke();
}

function PaintApple(apple) {
    ctx.strokeStyle = apple.color;
    ctx.fillStyle = apple.color;
    ctx.beginPath();
    ctx.rect(apple.x, apple.y, 10, 10);
    ctx.closePath();
    ctx.stroke();
    ctx.fill();
}