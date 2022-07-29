const ballButtonList = document.querySelectorAll('.static-ball');
const arrow = document.querySelector('.arrow');

const colorArray = ["76549A", "DF7861", "1C6DD0", "A3E4DB", "F6C6EA", "D9F8C4", "F37878", "A2B5BB", "7D9D9C", "85C88A"];

ballButtonList.forEach((ballButton, index) => {
    ballButton.addEventListener('click', event => {
        arrow.style.animationDuration = `2.${index}s`;
        arrow.style.fill = `#${colorArray[index]}`;
        removeSelected();
        ballButton.classList.add('selected');
    });
});

function removeSelected() {
    ballButtonList.forEach(ballButton => {
        ballButton.classList.remove('selected');
    });
}