function Reset() {
    xHistory = [0];
    yHistory = [0];
    ClearHistory();
    clearInterval(movement);
    latestKey = 'ArrowLeft';
    ResetPosition();
}

function ResetPosition() {
    snake.lengthOfBody = 30;
    x = 0;
    y = 0;
}

