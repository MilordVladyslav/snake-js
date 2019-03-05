window.onload = () => {
    'use srtict'


    var canvas = document.getElementById('canvasId');
    var ctx = canvas.getContext('2d');

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

















//GOOD VERSION BELOW




window.onload = () => {
    'use srtict';

    let canvas = document.getElementById('canvasId');
    let ctx = canvas.getContext('2d');

    ctx.strokeStyle = "black";
    ctx.lineWidth = "6";
    ctx.stroke();

    let x = 0;
    let y = 0;

    let up;
    let right;
    let down;
    let left;

    let speed = 500;

    let xHistory = [0];
    let yHistory = [0];




    // ctx.rect(x, y -= 10, 10, 10);

    // // let snake = {
    // //     body: [
    //
    //         ctx.rect(xHistory[xHistory.length - 10], yHistory[yHistory.length - 10], 10, 10),
    //         ctx.rect(xHistory[xHistory.length - 9], yHistory[yHistory.length - 9], 10, 10),
    //         ctx.rect(xHistory[xHistory.length - 8], yHistory[yHistory.length - 8], 10, 10),
    //         ctx.rect(xHistory[xHistory.length - 7], yHistory[yHistory.length - 7], 10, 10),
    //         ctx.rect(xHistory[xHistory.length - 6], yHistory[yHistory.length - 6], 10, 10),
    //         ctx.rect(xHistory[xHistory.length - 5], yHistory[yHistory.length - 5], 10, 10),
    //         ctx.rect(xHistory[xHistory.length - 4], yHistory[yHistory.length - 4], 10, 10),
    //         ctx.rect(xHistory[xHistory.length - 3], yHistory[yHistory.length - 3], 10, 10),
    //         ctx.rect(xHistory[xHistory.length - 2], yHistory[yHistory.length - 2], 10, 10),
    //         ctx.rect(x, y -= 10, 10, 10)
    //
    // //     ]
    // // };

    function Up() {
        up = setInterval(() => {

            ctx.rect(x, y -= 10, 10, 10);
            yHistory.push(y);
            xHistory.push(x);

            for(let i = 0; i <= snake.length; i ++) {
                ctx.rect(xHistory[xHistory.length - i], yHistory[yHistory.length - i], 10, 10);
            }

            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.stroke();
            ctx.beginPath();
        }, speed);
    }

    // snake = [
    //     ctx.rect(xHistory[xHistory.length - 10],yHistory[yHistory.length - 10], 10, 10),
    //     ctx.rect(xHistory[xHistory.length - 9], yHistory[yHistory.length - 9], 10, 10),
    //     ctx.rect(xHistory[xHistory.length - 8], yHistory[yHistory.length - 8], 10, 10),
    //     ctx.rect(xHistory[xHistory.length - 7], yHistory[yHistory.length - 7], 10, 10),
    //     ctx.rect(xHistory[xHistory.length - 6], yHistory[yHistory.length - 6], 10, 10),
    //     ctx.rect(xHistory[xHistory.length - 5], yHistory[yHistory.length - 5], 10, 10),
    //     ctx.rect(xHistory[xHistory.length - 4], yHistory[yHistory.length - 4], 10, 10),
    //     ctx.rect(xHistory[xHistory.length - 3], yHistory[yHistory.length - 3], 10, 10),
    //     ctx.rect(xHistory[xHistory.length - 2], yHistory[yHistory.length - 2], 10, 10),
    //     ctx.rect(x += 10, y, 10, 10)
    // ];

    snake = [0, 0];

    function Right () {
        right = setInterval(() => {

            ctx.rect(x += 10, y, 10, 10);
            yHistory.push(y);
            xHistory.push(x);

            for(let i = 0; i <= snake.length; i ++) {
                ctx.rect(xHistory[xHistory.length - i], yHistory[yHistory.length - i], 10, 10);
            }

            // ctx.rect(xHistory[xHistory.length - snake.length], yHistory[yHistory.length - snake.length], 10, 10);
            // ctx.rect(xHistory[xHistory.length - snake.length], yHistory[yHistory.length - snake.length], 10, 10);
            // ctx.rect(xHistory[xHistory.length - snake.length], yHistory[yHistory.length - snake.length], 10, 10);
            // ctx.rect(xHistory[xHistory.length - snake.length], yHistory[yHistory.length - snake.length], 10, 10);
            // ctx.rect(xHistory[xHistory.length - snake.length], yHistory[yHistory.length - snake.length], 10, 10);
            // ctx.rect(xHistory[xHistory.length - snake.length], yHistory[yHistory.length - snake.length], 10, 10);
            // ctx.rect(xHistory[xHistory.length - snake.length], yHistory[yHistory.length - snake.length], 10, 10);
            // ctx.rect(xHistory[xHistory.length - snake.length], yHistory[yHistory.length - snake.length], 10, 10);
            // ctx.rect(xHistory[xHistory.length - snake.length], yHistory[yHistory.length - snake.length], 10, 10);

            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.stroke();
            ctx.beginPath();
        }, speed);
    }

    Right();

    function Down() {
        down = setInterval(() => {

            ctx.rect(x, y += 10, 10, 10);
            yHistory.push(y);
            xHistory.push(x);

            for(let i = 0; i <= snake.length; i ++) {
                ctx.rect(xHistory[xHistory.length - i], yHistory[yHistory.length - i], 10, 10);
            }

            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.stroke();
            ctx.beginPath();
        }, speed);

    }

    function Left() {
        down = setInterval( () => {
            ctx.rect(x -= 10, y, 10, 10);
            yHistory.push(y);
            xHistory.push(x);

            for(let i = 0; i <= snake.length; i ++) {
                ctx.rect(xHistory[xHistory.length - i], yHistory[yHistory.length - i], 10, 10);
            }


            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.stroke();
            ctx.beginPath();
        }, speed);
    }

    let latestKey;

    window.addEventListener('keyup', (e) => {

        console.log(latestKey);

        if(e.key  !== latestKey) {

            if (e.key === 'ArrowUp' && latestKey != 'ArrowDown') {
                clearInterval(up);
                clearInterval(right);
                clearInterval(down);
                clearInterval(left);
                Up();
            }

            if (e.key === 'ArrowRight' && latestKey != 'ArrowLeft') {
                clearInterval(up);
                clearInterval(right);
                clearInterval(down);
                clearInterval(left);
                Right();
            }

            if (e.key === 'ArrowDown' && latestKey != 'ArrowUp') {
                clearInterval(up);
                clearInterval(right);
                clearInterval(down);
                clearInterval(left);
                Down();
            }

            if (e.key === 'ArrowLeft' && latestKey != 'ArrowRight') {
                clearInterval(up);
                clearInterval(right);
                clearInterval(down);
                clearInterval(left);
                Left();
            }

            latestKey = e.key;
        }
    });

};














// ctx.rect(x, y -= 10, 10, 10);

// // let snake = {
// //     body: [
//
//         ctx.rect(xHistory[xHistory.length - 10], yHistory[yHistory.length - 10], 10, 10),
//         ctx.rect(xHistory[xHistory.length - 9], yHistory[yHistory.length - 9], 10, 10),
//         ctx.rect(xHistory[xHistory.length - 8], yHistory[yHistory.length - 8], 10, 10),
//         ctx.rect(xHistory[xHistory.length - 7], yHistory[yHistory.length - 7], 10, 10),
//         ctx.rect(xHistory[xHistory.length - 6], yHistory[yHistory.length - 6], 10, 10),
//         ctx.rect(xHistory[xHistory.length - 5], yHistory[yHistory.length - 5], 10, 10),
//         ctx.rect(xHistory[xHistory.length - 4], yHistory[yHistory.length - 4], 10, 10),
//         ctx.rect(xHistory[xHistory.length - 3], yHistory[yHistory.length - 3], 10, 10),
//         ctx.rect(xHistory[xHistory.length - 2], yHistory[yHistory.length - 2], 10, 10),
//         ctx.rect(x, y -= 10, 10, 10)
//
// //     ]
// // };









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


    function GotApple() {
        snake.unshift(0);
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
            } else if (x > canvas.width || x < 0 || y  < 0 || y > canvas.height) {
                alert('Game Over!');
                StopAll();
                return true;
            }
        }

    }



    function Up() {
        up = setInterval(() => {

            ctx.rect(x, y -= 10, 10, 10);
            yHistory.push(y);
            xHistory.push(x);

            if(xHistory.length > snake.length) {
                xHistory.shift();
                // console.log(xHistory);
            }
            if(yHistory.length > snake.length) {
                yHistory.shift();
                // console.log(yHistory);
            }
            if(x === Apple.x && y === Apple.y) {
                console.log('Great! Go to walk along the streets');
                GotApple();
            }

            for(let i = 0; i <= snake.length; i ++) {
                ctx.rect(xHistory[xHistory.length - i], yHistory[yHistory.length - i], 10, 10);
            }
            ctx.rect(Apple.x, Apple.y, 10, 10);
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.stroke();
            ctx.beginPath();
        }, speed);
    }


    snake = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

    function Movement (keypress) {
        right = setInterval(() => {

            switch (keypress) {
                case 'ArrowUp':
                    StopAll();
                    y -= 10;
                    break;
                case 'ArrowRight':
                    // StopAll();
                    x += 10;
                    break;
                case 'ArrowDown':
                    StopAll();
                    y += 10;
                    break;
                case 'ArrowLeft':
                    StopAll();
                    y -= 10;
                    break;
            }

            GameOverChecking(x, y);

            ctx.rect(x, y, 10, 10);

            yHistory.push(y);
            xHistory.push(x);

            if(xHistory.length > snake.length) {
                xHistory.shift();
                // console.log(xHistory);
            }
            if(yHistory.length > snake.length) {
                yHistory.shift();
                // console.log(yHistory);
            }

            if(x === Apple.x && y === Apple.y) {
                console.log('Great! Go to walk along the streets');
                GotApple();
            }

            if(x === Apple.x && y === Apple.y) {
                console.log('Great! Go to walk along the streets');
            }

            for(let i = 0; i <= snake.length; i ++) {
                ctx.rect(xHistory[xHistory.length - i], yHistory[yHistory.length - i], 10, 10);
            }

            ctx.rect(Apple.x, Apple.y, 10, 10);

            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.stroke();
            ctx.beginPath();
        }, speed);
    }

    Movement('ArrowRight');

    function Down() {
        down = setInterval(() => {

            ctx.rect(x, y += 10, 10, 10);
            yHistory.push(y);
            xHistory.push(x);

            if(xHistory.length > snake.length) {
                xHistory.shift();
                // console.log(xHistory);
            }
            if(yHistory.length > snake.length) {
                yHistory.shift();
                // console.log(yHistory);
            }

            if(x === Apple.x && y === Apple.y) {
                console.log('Great! Go to walk along the streets');
                GotApple();
            }

            if(x === Apple.x && y === Apple.y) {
                console.log('Great! Go to walk along the streets');
            }

            for(let i = 0; i <= snake.length; i ++) {
                ctx.rect(xHistory[xHistory.length - i], yHistory[yHistory.length - i], 10, 10);
            }

            ctx.rect(Apple.x, Apple.y, 10, 10);
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.stroke();
            ctx.beginPath();

        }, speed);

    }

    function Left() {
        down = setInterval( () => {
            ctx.rect(x -= 10, y, 10, 10);

            yHistory.push(y);
            xHistory.push(x);

            if(xHistory.length > snake.length) {
                xHistory.shift();
                // console.log(xHistory);
            }

            if(yHistory.length > snake.length) {
                yHistory.shift();
                // console.log(xHistory);
            }


            if(x === Apple.x && y === Apple.y) {
                console.log('Great! Go to walk along the streets');
                GotApple();
            }

            for(let i = 0; i <= snake.length; i ++) {
                ctx.rect(xHistory[xHistory.length - i], yHistory[yHistory.length - i], 10, 10);
            }

            ctx.rect(Apple.x, Apple.y, 10, 10);
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.stroke();
            ctx.beginPath();
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




function Movement (keypress, latestKey) {

    clearInterval(right);

    right = setInterval((latestKey) => {

        if(keypress === 'ArrowRight' && latestKey !== 'ArrowLeft') {
            x += 10;
        }
        else if(keypress === 'ArrowLeft' && latestKey !== 'ArrowRight') {
            x -= 10;
        }
        else if (keypress === 'ArrowDown' && latestKey !== 'ArrowUp') {
            y += 10;
        }
        else if (keypress === 'ArrowUp' && latestKey !== 'ArrowDown') {
            y -= 10;
        }

        GameOver(x, y);

        ctx.rect(x, y, 10, 10);

        yHistory.push(y);
        xHistory.push(x);

        ShiftHistory();

        if(x === Apple.x && y === Apple.y) {
            GotApple();
        }
        for(let i = 0; i <= snake.length; i ++) {
            ctx.rect(xHistory[xHistory.length - i], yHistory[yHistory.length - i], 10, 10);
        }

        ctx.rect(Apple.x, Apple.y, 10, 10);

        Paint();

    }, speed);

}








