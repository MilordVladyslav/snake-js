window.onload = () => {
    'use srtict';

    //Рисует сердечки.
    PaintHealth();

    function GameOverChecking(x, y) {

        for (let i in xHistory) {

            //Проверяются на совпадения координат X Y с хвостом змейки. Если совпадает - змейка столкнулась
            //сама с собой
            if(xHistory[i] === x && yHistory[i] === y) {
                health -= 1;
                console.log('top over');
                if(health === 0) {
                    document.querySelector('.game-over').classList.add('active');
                }else {
                    PaintHealth();
                    Reset();
                    Movement('Right');
                }
                break;

            //Проверка на столкновение змейки с краем поля.
            } else if (x >= canvas.width || x < 0 || y  < 0 || y >= canvas.height) {
                health -= 1;
                if(health === 0) {
                    document.querySelector('.game-over').classList.add('active');
                }else {
                    PaintHealth();
                    Reset();
                    Movement('Right');
                }
                break;
            }
        }

    }


    //Приводит змейку в движение.
    function Movement (direction) {
        movement = setInterval(() => {


            //В зависимости от нажатой клавиши изменяет координату по X или Y
            if(direction === 'Right') {
                x += 10;
            } else if (direction === 'Left') {
                x -= 10;
            } else if (direction === 'Up') {
                y -= 10;
            } else if (direction === 'Down') {
                y += 10;
            }


            //После каждого изменения координаты проверяет текущую позицию на столкновение
            GameOverChecking(x, y);

            //Добавляет значения в историю передвижения. Для корректного отображения хвоста змейки.
            AddHistory();

            //Удаляет устаревшие данные из истории передвижения
            ClearHistory();

            //Сравнение текущей позиции с позицией яблок
            ComparsionWithApplePosition(apple1);
            ComparsionWithApplePosition(apple2);
            ComparsionWithApplePosition(apple3);
            ComparsionWithApplePosition(apple4);
            ComparsionWithApplePosition(apple5);

            ctx.beginPath();

            //отрисовывает хвост змеи. Позиция хвоста зависит от данных с истории
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

            //Рисует яблоки.
            PaintApple(apple1);
            PaintApple(apple2);
            PaintApple(apple3);
            PaintApple(apple4);
            PaintApple(apple5);


        }, speed);

    }

    Movement('Right');

    document.querySelector('#game-over').addEventListener('click', function() {
        Restart();
        Movement('Right');
    });



    window.addEventListener('keyup', (e) => {


        //Кейтригер для предотвращения реакции на нажатие двух клавиш почти одновременно.
        keytrigger.push(e.key);

        setTimeout(() => {
            keytrigger = [];
        }, speed);

        if(keytrigger[0] !== latestKey) {

            if (keytrigger[0] === 'ArrowUp' && latestKey !== 'ArrowDown') {

                clearInterval(movement);
                Movement('Up');
            }
            if (keytrigger[0] === 'ArrowRight' && latestKey !== 'ArrowLeft') {

                clearInterval(movement);
                Movement('Right');
            }
            if (keytrigger[0] === 'ArrowDown' && latestKey !== 'ArrowUp') {

                clearInterval(movement);
                Movement('Down');
            }
            if (keytrigger[0] === 'ArrowLeft' && latestKey !== 'ArrowRight') {

                clearInterval(movement);
                Movement('Left');
            }

            latestKey = e.key;

        }

    });

};