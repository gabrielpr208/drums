document.body.addEventListener('keyup', function tocar(event){
    let key = event.code.toLowerCase();
    playSound(key);
});

function playSound(key){
    let audio = document.querySelector(`#s_${key}`);
    if(audio){
        audio.currentTime = 0;
        audio.play();
    }
    let button = document.querySelector(`#${key}`);
    if(button){
        button.classList.add('active');
        setTimeout(()=>{
            button.classList.remove('active');
        }, 200);
    }
}

document.querySelector('#tocar').addEventListener('click', ()=>{
    let sequence = document.querySelector('#input').value;
    if(sequence != ''){
        let array = sequence.split('');
        playSong(array);
    }
});

function playSong(array){
    let time = 0;
    for(let i of array){
        setTimeout(()=>{
            playSound(`key${i}`);
        }, time);
        time += 250;
    }
}