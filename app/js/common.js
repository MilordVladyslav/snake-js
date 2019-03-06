window.onload = () => {
    'use srtict';

    PaintHealth();

    function GameOverChecking(x, y) {

        for (let i in xHistory) {
            if(xHistory[i] === x && yHistory[i] === y) {
                health -= 1;
                PaintHealth();
                Reset();
                Movement('Right');
                break;
            } else if (x >= canvas.width || x < 0 || y  < 0 || y >= canvas.height) {
                health -= 1;
                PaintHealth();
                Reset();
                Movement('Right');
                break;
            }
        }

    }



    function ComparsionWithApplePosition(apple) {
        if(x === apple.x && y === apple.y) {
            score += 1;
            GotApple(apple);
        }
    }

    function Movement (direction) {
        movement = setInterval(() => {

            if(direction === 'Right') {
                x += 10;
            } else if (direction === 'Left') {
                x -= 10;
            } else if (direction === 'Up') {
                y -= 10;
            } else if (direction === 'Down') {
                y += 10;
            }

            GameOverChecking(x, y);

            AddHistory();

            ClearHistory();

            ComparsionWithApplePosition(apple1);
            ComparsionWithApplePosition(apple2);
            ComparsionWithApplePosition(apple3);
            ComparsionWithApplePosition(apple4);
            ComparsionWithApplePosition(apple5);

            ctx.beginPath();

            for(let i = 0; i <= snake.lengthOfBody; i ++) {
                ctx.rect(xHistory[xHistory.length - i], yHistory[yHistory.length - i], 10, 10);
            }


            ctx.strokeStyle = snake.strokeStyle;
            ctx.lineWidth = "2";
            ctx.fillStyle = snake.fillStyle;

            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.rect(x, y, 10, 10);
            ctx.closePath();
            ctx.stroke();
            ctx.fill();

            PaintApple(apple1);
            PaintApple(apple2);
            PaintApple(apple3);
            PaintApple(apple4);
            PaintApple(apple5);


        }, speed);

    }

    Movement('Right');

    window.addEventListener('keyup', (e) => {

        if(e.key  !== latestKey) {

            if (e.key === 'ArrowUp' && latestKey !== 'ArrowDown') {
                clearInterval(movement);
                Movement('Up');
            }
            if (e.key === 'ArrowRight' && latestKey !== 'ArrowLeft') {
                clearInterval(movement);
                Movement('Right');
            }
            if (e.key === 'ArrowDown' && latestKey !== 'ArrowUp') {
                clearInterval(movement);
                Movement('Down');
            }
            if (e.key === 'ArrowLeft' && latestKey !== 'ArrowRight') {
                clearInterval(movement);
                Movement('Left');
            }
            latestKey = e.key;

        }

    });

};