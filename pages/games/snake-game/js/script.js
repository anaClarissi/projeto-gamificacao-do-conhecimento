const canvas = document.querySelector("canvas");
const contexto = canvas.getContext("2d");

const spanName = document.querySelector(".name--player");
const score = document.querySelector(".score--value");
const finalScore = document.querySelector(".final-score > span");
const menu = document.querySelector(".menu-screen");
const buttonPlay = document.querySelector(".btn-play");

const scoreAbsolut = 10;

const audio = new Audio('../assets/audio.mp3');

const size = 30;
const widthCanvas = size * 29;
const heightCanvas = size * 23;

canvas.width = widthCanvas;
canvas.height = heightCanvas;

const randomNumber = (min, max) => {

    return Math.round(Math.random() * (max  - min) + min);

}

const randomPositionX = () => {

    const number = randomNumber(0,canvas.width - size);

    return Math.round(number / size) * size;

}

const randomPositionY = () => {

    const number = randomNumber(0,canvas.height - size);

    return Math.round(number / size) * size;

}

const randomColor = () => {

    const red = randomNumber(0, 255);
    const green = randomNumber(0, 255);
    const blue = randomNumber(0, 255);

    return `rgb(${red}, ${green}, ${blue})`;

}

const food = {
    x: randomPositionX(),
    y: randomPositionY(),
    color: randomColor(),
};

const initialPosition = {x: size * 17 , y: size * 13};

let snake = [
    initialPosition
];

const incrementScore = () => {

    score.innerHTML = +score.innerHTML + scoreAbsolut;

}

let direction = "";
let loopId;

const drawFood = () => {

    const {x, y, color, sizeFood} = food;

    contexto.shadowColor = color;
    contexto.shadowBlur = 6;
    contexto.fillStyle = color;
    contexto.fillRect(x,y, size, size);
    contexto.shadowBlur = 0;

}

const drawSnake = () => {
    
    contexto.fillStyle = "#ddd";

    snake.forEach((position, index) => {

        if (index == snake.length - 1) {

            contexto.fillStyle = "white";

        }

        contexto.fillRect(position.x, position.y, size, size);

    });

}

const moveSnake = () => {

    if (!direction) return;

    const head = snake[snake.length - 1];

    snake.shift();
    
    if (direction == "right") {

        snake.push({x: head.x + size, y: head.y});

    }

    if (direction == "left") {

        snake.push({x: head.x - size, y: head.y});

    }

    if (direction == "down") {

        snake.push({x: head.x, y: head.y + size});

    }

    if (direction == "up") {

        snake.push({x: head.x, y: head.y - size});

    }

}

const drawGrid = () => {

    contexto.lineWidth = 1;
    contexto.strokeStyle = "#191919";

    for (let i = size; i < canvas.width; i+= size) {

        contexto.beginPath();
        contexto.lineTo(i, 0);
        contexto.lineTo(i, canvas.height);

        contexto.stroke();

    }

    for (let i = size; i < canvas.height; i+= size) {

        contexto.beginPath();
        contexto.lineTo(0, i);
        contexto.lineTo(canvas.width, i);

        contexto.stroke();

    }

    

}

const chackEat = () => {

    const head = snake[snake.length - 1];

    if (head.x == food.x && head.y == food.y) {

        snake.push(head);

        audio.play();

        incrementScore();
        
        let x = randomPositionX();
        let y = randomPositionY();

        while (snake.find((position) => position.x == x && position.y == y)) {

            x = randomPositionX();
            y = randomPositionY();

        }

        food.x = x;
        food.y = y;
        food.color = randomColor();

    }

}

const checkCollision = () => {

    const head = snake[snake.length - 1];

    const neckIndex = snake.length - 2;

    const wallCollision =

        head.x < 0 || head.x > (canvas.width - size) || head.y < 0 || head.y > (canvas.height - size);

    const selfCollision = snake.find((position, index) => {

        return index < neckIndex && position.x == head.x && position.y == head.y;

    })

    if (wallCollision || selfCollision) {
        
        gameOver();

    }

}

let gameIsOver = false;

const gameOver = () => {

    direction = undefined;

    gameIsOver = true;

    menu.style.display = "flex";
    finalScore.innerHTML = score.innerHTML;

    canvas.style.filter = "blur(4px)";

}

const gameLoop = () => {

    clearInterval(loopId);

    contexto.clearRect(0, 0, canvas.width, canvas.height);

    drawGrid();
    drawFood();
    moveSnake();
    drawSnake();
    chackEat();
    checkCollision();
    spanName.innerHTML = localStorage.getItem('user');

    loopId = setTimeout(() => {

        gameLoop();

    }, 100);

}

gameLoop();

document.addEventListener("keydown", ({key}) => {

    if (!gameIsOver){

        if ((key == "ArrowRight" || key == "d") && direction != "left"){
            direction = "right";
        }
    
        if ((key == "ArrowLeft" || key == "a") && direction != "right") {
            direction = "left";
        }
    
        if ((key == "ArrowDown" || key == "s") && direction != "up") {
            direction = "down";
        }
    
        if ((key == "ArrowUp" || key == "w") && direction != "down") {
            direction = "up";
        }
    }


});

buttonPlay.addEventListener("click", () => {

    score.innerText = "00";

    menu.style.display = "none";

    canvas.style.filter = "none";

    snake = [initialPosition];

    gameIsOver = false;

})

