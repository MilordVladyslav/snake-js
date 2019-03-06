window.onload = () => {
    'use srtict';

    let canvas = document.getElementById('canvasId');
    let ctx = canvas.getContext('2d');

    console.log(canvas.width);


    let x = 0;
    let y = 0;

    let up;
    let defaultRight;
    let right;
    let down;
    let left;

    let speed = 500;


    defaultRight = setInterval(() => {

        ctx.rect(x, y, 10, 10);
        ctx.rect(x += 10, 0, 10, 10);
        ctx.rect(x += 10, 0, 10, 10);
        ctx.rect(x += 10, 0, 10, 10);
        ctx.rect(x += 10, 0, 10, 10);
        ctx.rect(x += 10, 0, 10, 10);
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.stroke();
        ctx.beginPath();
    }, speed);


    function Down () {
        right = setInterval(() => {
            ctx.rect(x, y, 10, 10);
            ctx.rect(x, y +=10, 10, 10);
            ctx.rect(x, y +=10, 10, 10);
            ctx.rect(x, y +=10, 10, 10);
            ctx.rect(x, y +=10, 10, 10);
            ctx.rect(x, y +=10, 10, 10);
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.stroke();
            ctx.beginPath();
        }, speed);

    }

    function Up () {
        down = setInterval(() => {
            ctx.rect(x, y, 10, 10);
            ctx.rect(x, y -=10, 10, 10);
            ctx.rect(x, y -=10, 10, 10);
            ctx.rect(x, y -=10, 10, 10);
            ctx.rect(x, y -=10, 10, 10);
            ctx.rect(x, y -=10, 10, 10);
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.stroke();
            ctx.beginPath();
        }, speed);

    }



    function Right () {
        right = setInterval(() => {
            ctx.rect(x, y, 10, 10);
            ctx.rect(x += 10, y, 10, 10);
            ctx.rect(x += 10, y, 10, 10);
            ctx.rect(x += 10, y, 10, 10);
            ctx.rect(x += 10, y, 10, 10);
            ctx.rect(x += 10, y, 10, 10);
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.stroke();
            ctx.beginPath();
        }, speed)
    }

    function Left () {
        left = setInterval(() => {
            ctx.rect(x, y, 10, 10);
            ctx.rect(x -= 10, y, 10, 10);
            ctx.rect(x -= 10, y, 10, 10);
            ctx.rect(x -= 10, y, 10, 10);
            ctx.rect(x -= 10, y, 10, 10);
            ctx.rect(x -= 10, y, 10, 10);
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.stroke();
            ctx.beginPath();
        }, speed)
    }



    window.addEventListener('keyup', (e) => {
        console.log(e.key);
        clearInterval(up);
        clearInterval(defaultRight);
        clearInterval(right);
        clearInterval(down);
        clearInterval(left);

        if(e.key == 'ArrowUp') {
            Up();
        }
        if(e.key == 'ArrowRight') {
            Right();
        }
        if(e.key == 'ArrowDown') {
            Down();
        }
        if(e.key == 'ArrowLeft') {
            Left();
        }

    });

    // for(let i = 100; i < 1000; i ) {
    //     console.log(i)
    // }
    // for(i = 100; i < 1000; i +1000) {
    //     ctx.rect(i, 0, 100, 100);
    //
    // }



    ctx.strokeStyle = "black";
    ctx.lineWidth = "6";
    ctx.stroke();


};







let snake = {
    body: [
        ctx.rect(x, y -= 10, 10, 10)
    ]
};

let snakeLength = 1;

// ctx.rect(xHistory[xHistory.length - 10], yHistory[yHistory.length - 10], 10, 10),
// ctx.rect(xHistory[xHistory.length - 9], yHistory[yHistory.length - 9], 10, 10),
// ctx.rect(xHistory[xHistory.length - 8], yHistory[yHistory.length - 8], 10, 10),
// ctx.rect(xHistory[xHistory.length - 7], yHistory[yHistory.length - 7], 10, 10),
// ctx.rect(xHistory[xHistory.length - 6], yHistory[yHistory.length - 6], 10, 10),
// ctx.rect(xHistory[xHistory.length - 5], yHistory[yHistory.length - 5], 10, 10),
// ctx.rect(xHistory[xHistory.length - 4], yHistory[yHistory.length - 4], 10, 10),
// ctx.rect(xHistory[xHistory.length - 3], yHistory[yHistory.length - 3], 10, 10),
// ctx.rect(xHistory[xHistory.length - 2], yHistory[yHistory.length - 2], 10, 10),
// ctx.rect(x, y -= 10, 10, 10);

function UnshiftSnake() {

    snake.body.unshift(
        ctx.rect(
            xHistory[xHistory.length - snake.body.length], yHistory[yHistory.length - snake.body.length], 10, 10
        )
    )
}

// UnshiftSnake();


// let xStroke = 0;
// let yStroke = 0;
//
// let coordinates = [
//     // [0, 0]
// ];
//
// let xAmount = canvas.width / 10;
// let yAmount = canvas.height / 10;
//
// for (let i = 0; i < yAmount; i++) {
//     for (let j = 0; j < xAmount; j++) {
//         coordinates.push([xStroke, yStroke]);
//         // ctx.rect(xStroke, yStroke, 10, 10);
//         xStroke += 10;
//     }
//
//     xStroke = 0;
//     yStroke += 10;
// }

// ctx.strokeStyle = 'red';