function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if(!audio) return;
        audio.currentTime = 0;
        audio.play();
        key.classList.add('playing');
}

window.addEventListener('keydown', playSound);

function playSoundClick(e) {
    const eventTarget= e.target;

    if(e.target.classList.contains('key')) {

        const dataKey = e.target.getAttribute('data-key');
        const audio = document.querySelector(`audio[data-key="${dataKey}"]`)
        audio.currentTime = 0;
        audio.play();
        e.target.classList.add('playing');
    }
    else if(e.target.parentNode.classList.contains('key')){
        const eventParent = e.target.parentNode;
        const dataKey = e.target.parentNode.getAttribute('data-key');
        const audio = document.querySelector(`audio[data-key="${dataKey}"]`)
        console.log(audio);
        audio.currentTime = 0;
        audio.play();
        eventParent.classList.add('playing');
    }
}

window.addEventListener('click',playSoundClick)


const keys = document.querySelectorAll('.key');

function removeTransition(e){
    if(e.propertyName !=='transform') return;
    this.classList.remove('playing');
    console.log(e,e.propertyName);
}

keys.forEach(key => key.addEventListener('transitionend',removeTransition));