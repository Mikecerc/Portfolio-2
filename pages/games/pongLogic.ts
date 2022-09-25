import { Ref, getCurrentInstance } from "vue";
export let hasStarted: Ref<boolean> = ref(false);
export let hasLost: Ref<boolean> = ref(false);
export let hasWon: Ref<boolean> = ref(false);
export let difficulty = [0.006, 0.000001];
export let lastTime: number;
export function diffButton(number: number) {
    const flexBox = document.querySelector(".flex");
    Object.entries(flexBox.children).forEach((e, index) => {
        const element = e[1].firstElementChild;
        element.classList.remove("button-selected");
        if (number == index) {
            element.classList.add("button-selected");
            switch (number) {
                case 0:
                    difficulty = [0.006, 0.000001];
                    break;
                case 1:
                    difficulty = [0.009, 0.000002];
                    break;
                case 2:
                    difficulty = [0.02, 0.000008];
                    break;
            }
        }
    });
}
export function startGame() {
    console.log("game Started");
    const ball = new Ball(document.getElementById("ball"), difficulty[1]);
    const playerPaddle = new Paddle(document.getElementById("player-paddle"), difficulty[0]);
    const computerPaddle = new Paddle(document.getElementById("computer-paddle"), difficulty[0]);
    const playerScoreElement = document.getElementById("player-score");
    const computerScoreElement = document.getElementById("computer-score");

    document.addEventListener("mousemove", (e) => {
        playerPaddle.position = (e.y / window.innerHeight) * 100;
    });
    hasStarted.value = true;
    setTimeout(() => {
        window.requestAnimationFrame(function (time) {
            
            update(time, ball, playerPaddle, computerPaddle, playerScoreElement, computerScoreElement);
            ball.reset()
            computerPaddle.reset()
        });
        playerScoreElement.textContent = "0";
        computerScoreElement.textContent = "0";
    }, 3000);
}
export function update(
    time: number,
    ball: Ball,
    playerPaddle: Paddle,
    computerPaddle: Paddle,
    playerScoreElement: HTMLElement,
    computerScoreElement: HTMLElement
) {
    if (lastTime != null) {
        const delta = time - lastTime;
        ball.update(delta, [playerPaddle.rect(), computerPaddle.rect()]);
        computerPaddle.update(delta, ball.y);

        if (isLose(ball)) {
            const gameEnd = handleLose(playerScoreElement, computerScoreElement, ball, computerPaddle);
            if (gameEnd) return;
        }
    }

    lastTime = time;
    if (hasStarted.value == true) {
        window.requestAnimationFrame(function (time0) {
            update(time0, ball, playerPaddle, computerPaddle, playerScoreElement, computerScoreElement);
        });
    }
}

export function isLose(ball: Ball) {
    const rect = ball.rect();
    console.log(rect)
    return rect.right >= window.innerWidth || rect.left <= 0;
}

export function handleLose(playerScoreElement: HTMLElement, computerScoreElement: HTMLElement, ball: Ball, computerPaddle: Paddle) {
    const rect = ball.rect();
    if (rect.x < -5) {
        ball.reset();
        return computerPaddle.reset();
    }
    if (rect.right >= window.innerWidth) {
        playerScoreElement.textContent = (parseInt(playerScoreElement.textContent) + 1).toString();
    } else {
        computerScoreElement.textContent = (parseInt(computerScoreElement.textContent) + 1).toString();
    }
    if (parseInt(playerScoreElement.textContent) >= 10 || parseInt(computerScoreElement.textContent) >= 10) {
        handleEnd(parseInt(playerScoreElement.textContent).toString(), parseInt(computerScoreElement.textContent).toString());
        return true;
    }
    ball.reset();
    computerPaddle.reset();
}

export class Paddle {
    paddleElem: HTMLElement;
    speed: number;
    constructor(paddleElem: HTMLElement, speed: number) {
        if (speed) this.speed = speed;
        this.paddleElem = paddleElem;
        this.reset();
    }

    get position() {
        return parseFloat(getComputedStyle(this.paddleElem).getPropertyValue("--position"));
    }

    set position(value: number) {
        this.paddleElem.style.setProperty("--position", value.toString());
    }

    rect() {
        return this.paddleElem.getBoundingClientRect();
    }

    reset() {
        this.position = 50;
    }

    update(delta: number, ballHeight: number) {
        this.position += this.speed * delta * (ballHeight - this.position);
    }
}

const INITIAL_VELOCITY = 0.025;
export class Ball {
    velocityIncrease: number;
    ballElem: HTMLElement;
    direction: { x?: number; y?: number };
    velocity: number;
    constructor(ballElem: HTMLElement, difficulty: number) {
        this.velocityIncrease = difficulty;
        this.ballElem = ballElem;
        this.reset();
    }

    get x() {
        return parseFloat(getComputedStyle(this.ballElem).getPropertyValue("--x"));
    }

    set x(value) {
        this.ballElem.style.setProperty("--x", value.toString());
    }

    get y() {
        return parseFloat(getComputedStyle(this.ballElem).getPropertyValue("--y"));
    }

    rect() {
        return this.ballElem.getBoundingClientRect();
    }

    set y(value) {
        this.ballElem.style.setProperty("--y", value.toString());
    }

    reset() {
        this.x = 50;
        this.y = 50;
        this.direction = { x: 0 };
        while (Math.abs(this.direction.x) <= 0.2 || Math.abs(this.direction.x) >= 0.9) {
            const heading = randomNumberBetween(0, 2 * Math.PI);
            this.direction = { x: Math.cos(heading), y: Math.sin(heading) };
        }
        this.velocity = INITIAL_VELOCITY;
    }

    update(delta: number, paddleRects: [DOMRect, DOMRect]) {
        this.x += this.direction.x * this.velocity * delta;
        this.y += this.direction.y * this.velocity * delta;
        this.velocity += this.velocityIncrease * delta;
        const rect = this.rect();

        if (rect.bottom >= window.innerHeight || rect.top <= 0) {
            this.direction.y *= -1;
        }

        /**if (rect.right >= window.innerWidth || rect.left <= 0) {
        this.direction.x *= -1
        }*/

        if (paddleRects.some((r) => isCollision(r, rect))) {
            this.direction.x *= -1;
        }
    }
}

export function randomNumberBetween(min: number, max: number) {
    return Math.random() * (max - min) + min;
}

export function isCollision(rect1: { left: number; right: number; top: number; bottom: number }, rect2: DOMRect) {
    return rect1.left <= rect2.right && rect1.right >= rect2.left && rect1.top <= rect2.bottom && rect1.bottom >= rect2.top;
}
export function handleEnd(playerScore: string, computerScore: string) {
    if (parseInt(playerScore) > parseInt(computerScore)) {
        hasStarted.value = false;
        hasWon.value = true;
    } else {
        hasStarted.value = false;
        hasLost.value = true;
    }
}

export function endGame() {
    console.log("game ended");
    hasStarted.value = false;
    const instance = getCurrentInstance();
    instance?.proxy?.$forceUpdate();
}

export function resetGame() {
    hasStarted.value = false;
    hasWon.value = false;
    hasLost.value = false;
    const playerScoreElement = document.getElementById("player-score");
    const computerScoreElement = document.getElementById("computer-score");
    const computerPaddle = document.getElementById("computer-paddle");
    const ball = document.getElementById("ball");
    ball.style.setProperty("--x", "50");
    ball.style.setProperty("--y", "50");
    computerPaddle.style.setProperty("--position", "50");
    playerScoreElement.textContent = "0";
    computerScoreElement.textContent = "0";
}
