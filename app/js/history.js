
//История передвижения змейки по координатам. Нужна для корректной отрисовки хвоста змейки и проверки на столкновение
let xHistory = [0];
let yHistory = [0];


//Удаляет устаревшие данные из массива. Данные считаются устаревшими, если длинна массива больше длинны хвоста
function ClearHistory() {
    if(xHistory.length > snake.lengthOfBody) {
        xHistory.shift();
        // console.log(xHistory);
    }
    if(yHistory.length > snake.lengthOfBody) {
        yHistory.shift();
        // console.log(yHistory);
    }
}

//Добавляет новые координаты в историю передвижения.
function AddHistory() {
    yHistory.push(y);
    xHistory.push(x);
}