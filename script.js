const ballButtonList = document.querySelectorAll('.static-ball');
const arrow = document.querySelector('.arrow');
const menu = document.querySelector('.menu');
const addBtn = document.querySelector('.add-btn');
const container = document.querySelector('.container');

function removeSelected() {
    ballButtonList.forEach(ballButton => {
        ballButton.classList.remove('selected');
    });
}

addBtn.addEventListener('click', event => {
    event.preventDefault();
    let randomMovingBall = document.createElement('div'),
        randomStaticBall = document.createElement('div');

    let randomColor = Math.floor(Math.random() * 16777215).toString(16);
    let randomSpeed = Math.random();

    randomMovingBall.style.backgroundColor = '#' + randomColor;
    randomMovingBall.style.animationDuration = 2 + randomSpeed + "s";

    randomStaticBall.style.backgroundColor = '#' + randomColor;
    randomStaticBall.style.animationDuration = 2 + randomSpeed + "s";

    randomMovingBall.classList.add('ball', 'anim-ball');
    randomStaticBall.classList.add('ball', 'static-ball');

    container.append(randomMovingBall);
    menu.append(randomStaticBall);

    let dynamicallyAddedBalls = document.querySelectorAll('.static-ball');

    dynamicallyAddedBalls[dynamicallyAddedBalls.length - 1].addEventListener('click', e => {
        arrow.style.fill = '#' + randomColor;
    });
});

menu.addEventListener('click', event => {
    if (event.target.classList.contains('ball')) {
        let ballList = document.querySelectorAll('.static-ball');
        for (item of ballList) {
            item.classList.remove('selected');
        }
        event.target.classList.add('selected');
    }
});