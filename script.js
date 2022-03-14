const playing = document.querySelector('.key');
console.log(+getComputedStyle(playing).transition.split(' ')[1].slice(0,-1));
function playSound(e) {
    // console.log(e)
    // console.log(e['keyCode'])
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    // console.log(audio)
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if(!audio) return;
    audio.currentTime = 0;
    audio.play();
    key.classList.add('playing');
    // console.log(e.propertyName)
    setTimeout(function(){
        key.classList.remove('playing'); 
    },+getComputedStyle(playing).transition.split(' ')[1].slice(0,-1)+100)
}

window.addEventListener('keydown', playSound);

function playSoundClick(e) {
    const eventTarget= e.target;
    const eventParent = eventTarget.parentNode;
    const dataKey = eventParent.getAttribute('data-key');
    console.log(eventTarget, eventParent);

    if(eventParent.classList.contains('key')) {
        console.log('clicked on key')
    const audio = document.querySelector(`audio[data-key="${dataKey}"]`)
    const key = document.querySelector(`.key[data-key="${dataKey}"]`);
    console.log(audio);
    audio.currentTime = 0;
    audio.play();
    eventParent.classList.add('playing');
    setTimeout(function(){
        key.classList.remove('playing'); 
    },+getComputedStyle(playing).transition.split(' ')[1].slice(0,-1)+100)
    }
    else if(eventTarget.classList.contains('key')){

        console.log('test')
        const audio = document.querySelector(`audio[data-key="${eventTarget.getAttribute('data-key')}"]`)
    const key = document.querySelector(`.key[data-key="${eventTarget.getAttribute('data-key')}"]`);
    audio.currentTime = 0;
    audio.play();
    eventTarget.classList.add('playing');
    setTimeout(function(){
        key.classList.remove('playing'); 
    },+getComputedStyle(playing).transition.split(' ')[1].slice(0,-1)+100)
    // const dataKey = e.target.parentNode.getAttribute('data-key');
    // const audio = document.querySelector(`audio[data-key="${dataKey}"]`)
    // console.log(audio);
    // audio.currentTime = 0;
    // audio.play();
    // eventParent.classList.add('playing');
    }
}

window.addEventListener('click',playSoundClick)


const keys = document.querySelectorAll('.key');

// function removeTransition(e){
    // console.log(e)
    // if(e.propertyName !=='transform') return;
    // this.classList.remove('playing');
    // console.log(e,e.propertyName);
// }

// keys.forEach(key => key.addEventListener('click',playSoundClick));
// keys.forEach(key => key.classList.remove('playing'));
// keys.forEach(key => key.addEventListenaer('transitionend',removeTransition));
// keys.forEach(key => key.addEventListener('keydown',removeTransition));