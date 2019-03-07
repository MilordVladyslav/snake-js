//регулирует длинну и цвет змейки.
snake = {
    lengthOfBody: 20,
    strokeStyle: 'orange',
    fillStyle: 'orange',
    SnakeGenerate : function () {
        this.lengthOfBody += 10;
    }
};

// function SnakeGenerate () {
//     snake.lengthOfBody += 10;
// }