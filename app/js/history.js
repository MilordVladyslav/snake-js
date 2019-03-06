let xHistory = [0];
let yHistory = [0];

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

function AddHistory() {
    yHistory.push(y);
    xHistory.push(x);
}