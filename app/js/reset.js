
//При столкновении устанавливает все значения на исходные. Кроме очков и здоровья.
function Reset() {
    xHistory = [0];
    yHistory = [0];
    ClearHistory();
    clearInterval(movement);
    latestKey = "ArrowLeft";
    ResetPosition();
}


//Полный рестарт игры.
function Restart() {
    Reset();
    score = 0;
    health = 3;
    document.querySelector('.game-over').classList.remove('active');
    PaintHealth();
    PaintScore();
}

function ResetPosition() {
    snake.lengthOfBody = 20;
    x = 0;
    y = 0;
}

