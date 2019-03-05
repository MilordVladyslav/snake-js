window.onload = () => {
    'use srtict';

    let canvas = document.getElementById('canvasId');
    let ctx = canvas.getContext('2d');

    let xStroke = 0;
    let yStroke = 0;

    let coordinates = [
        // [0, 0]
    ];

    let xAmount = canvas.width / 10;
    let yAmount = canvas.height / 10;

    for (let i = 0; i < yAmount; i++) {
        for (let j = 0; j < xAmount; j++) {
            coordinates.push([xStroke, yStroke]);
            // ctx.rect(xStroke, yStroke, 10, 10);
            xStroke += 10;
        }

        xStroke = 0;
        yStroke += 10;
    }

    ctx.strokeStyle = 'red';

    let Apple = {

        x: null,
        y: null,

        generateLocation : function () {

            this.x = Number(Math.floor(Math.random() * 100 ) + '0');
            this.y = Number(Math.floor(Math.random() * 100 ) + '0');
        }

    };


    Apple.generateLocation();

    function SnakeGenerate () {
        for (i = 0; i < 10; i ++) {
            snake.push(i);
        }
    }

    function GotApple() {
        SnakeGenerate();
        Apple.generateLocation();
        ctx.rect(Apple.x, Apple.y, 10, 10);
        ctx.stroke();
    }

    ctx.rect(Apple.x, Apple.y, 10, 10);
    ctx.stroke();



    let x = 0;
    let y = 0;

    let up;
    let right;
    let down;
    let left;

    let speed = 50;

    let xHistory = [0];
    let yHistory = [0];


    function GameOverChecking(x, y) {

        for (let i in xHistory) {
            if(xHistory[i] === x && yHistory[i] === y) {
                console.log('Game over');
                StopAll();
            } else if (x > canvas.width || x < 0 || y  < 0 || y > canvas.height) {
                console.log('Game Over');
                StopAll();
                return true;
            }
        }

    }



    function Up() {
        up = setInterval(() => {

            y -= 10;

            GameOverChecking(x, y);

            ctx.rect(x, y, 10, 10);

            AddHistory();

            ClearHistory();

            if(x === Apple.x && y === Apple.y) {
                console.log('Great! Go to walk along the streets');
                GotApple();
            }

            for(let i = 0; i <= snake.length; i ++) {
                ctx.rect(xHistory[xHistory.length - i], yHistory[yHistory.length - i], 10, 10);
            }

            ctx.rect(Apple.x, Apple.y, 10, 10);

            Paint();

        }, speed);
    }


    snake = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];


    function ClearHistory() {
        if(xHistory.length > snake.length) {
            xHistory.shift();
            // console.log(xHistory);
        }
        if(yHistory.length > snake.length) {
            yHistory.shift();
            // console.log(yHistory);
        }
    }

    function AddHistory() {
        yHistory.push(y);
        xHistory.push(x);
    }

    function Right () {
        right = setInterval(() => {

            x += 10;

            GameOverChecking(x, y);

            ctx.rect(x, y, 10, 10);

            AddHistory();

            ClearHistory();

            if(x === Apple.x && y === Apple.y) {
                console.log('Great! Go to walk along the streets');
                GotApple();
            }

            for(let i = 0; i <= snake.length; i ++) {
                ctx.rect(xHistory[xHistory.length - i], yHistory[yHistory.length - i], 10, 10);
            }

            ctx.rect(Apple.x, Apple.y, 10, 10);

            Paint();

        }, speed);

    }

    function  Paint() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.stroke();
        ctx.beginPath();
    }

    Right();

    function Down() {
        down = setInterval(() => {

            y += 10;

            GameOverChecking(x, y);

            ctx.rect(x, y, 10, 10);

            AddHistory();

            ClearHistory();

            if(x === Apple.x && y === Apple.y) {
                console.log('Great! Go to walk along the streets');
                GotApple();
            }

            for(let i = 0; i <= snake.length; i ++) {
                ctx.rect(xHistory[xHistory.length - i], yHistory[yHistory.length - i], 10, 10);
            }

            ctx.rect(Apple.x, Apple.y, 10, 10);

            Paint();

        }, speed);

    }

    function Left() {
        left = setInterval( () => {
            x -= 10;

            GameOverChecking(x, y);

            ctx.rect(x, y, 10, 10);

            AddHistory();

            ClearHistory();

            if(x === Apple.x && y === Apple.y) {
                console.log('Great! Go to walk along the streets');
                GotApple();
            }

            for(let i = 0; i <= snake.length; i ++) {
                ctx.rect(xHistory[xHistory.length - i], yHistory[yHistory.length - i], 10, 10);
            }

            ctx.rect(Apple.x, Apple.y, 10, 10);

            Paint();
        }, speed);
    }

    let latestKey;

    function StopAll () {
        clearInterval(up);
        clearInterval(right);
        clearInterval(down);
        clearInterval(left);
    }




    window.addEventListener('keyup', (e) => {

        // console.log(latestKey);

        if(e.key  !== latestKey) {

            if (e.key === 'ArrowUp' && latestKey != 'ArrowDown') {
                StopAll();
                Up();
            }

            if (e.key === 'ArrowRight' && latestKey != 'ArrowLeft') {
                StopAll();
                Right();
            }

            if (e.key === 'ArrowDown' && latestKey != 'ArrowUp') {
                StopAll();
                Down();
            }

            if (e.key === 'ArrowLeft' && latestKey != 'ArrowRight') {
                StopAll();
                Left();
            }

            latestKey = e.key;
        }
    });

};