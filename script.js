const keys = document.querySelectorAll(`.key`);

window.addEventListener(`keydown`, e => {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if (!audio) return;
    audio.currentTime = 0;
    audio.play();

    key.classList.add(`keyDown`);
    //key.classList.remove(`keyDown`);

});

keys.forEach(key => key.addEventListener(`click`, playByMouse));

function playByMouse(e) {
    const keyCode = this.getAttribute(`data-key`);
    const audio = document.querySelector(`audio[data-key="${keyCode}"]`);
    audio.currentTime = 0;
    audio.play();
    const key = document.querySelector(`.key[data-key="${keyCode}"]`);
    key.classList.add(`keyDown`);
}

function removeAnimation(e) {
    if (e.animationName !== `expand`) return;
    this.classList.remove(`keyDown`);
}
keys.forEach(key => key.addEventListener(`animationend`, removeAnimation));




