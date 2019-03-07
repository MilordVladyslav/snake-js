
//Конструктор объектов яблок. Яблочный конструктор
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

//Генерирует новую позицию яблока.
function GotApple(apple) {

    snake.SnakeGenerate();

    apple.x = Number(Math.floor(Math.random() * canvas.width / 10 ) + '0');
    apple.y = Number(Math.floor(Math.random() * canvas.width / 10 ) + '0');

    ctx.rect(apple.x, apple.y, 10, 10);
    ctx.stroke();
}


//Отрисовывает яблоко
function PaintApple(apple) {
    ctx.strokeStyle = apple.color;
    ctx.fillStyle = apple.color;
    ctx.beginPath();
    ctx.rect(apple.x, apple.y, 10, 10);
    ctx.closePath();
    ctx.stroke();
    ctx.fill();
}


//Сравнивает текущие координаты с координатами яблока. Если сходятся - генерирует новую позицию яблока, добавляет
//очко и вызывает функцию отрисовки очков в html
function ComparsionWithApplePosition(apple) {
    if(x === apple.x && y === apple.y) {
        score += 1;
        GotApple(apple);
        PaintScore();
    }
}