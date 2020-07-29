

// Pegar o caminho do meu arquivo json

(async () =>{
    const sound = await getSound();
    console.log(sound);
    createLayout(sound);
})();


async function getSound(){
    const response = await fetch('./sound.json'); // Só funciona em server, inicar um próprio no live-server
    const json = await response.json();
    return json; // Array dos meus sons
}


function createLayout(sound){
    sound.forEach(value => {
        const div = document.createElement('div');
        const audio = document.createElement('audio');
        const name = document.createElement('h2');
        const play = document.createElement('button');
        play.classList.add('gradient-button');
        name.innerHTML = value.title;
        play.innerHTML = 'Play/Stop';
        audio.src = `${value.src}`;
        play.addEventListener('click',() =>{
            if(audio.currentTime > 0)
            {
                audio.pause();
                audio.currentTime = 0;
            }
            else{
                audio.play();
            }
          
        })
        div.append(name);
        div.append(audio);
        div.append(play);
        
        document.querySelector('section').append(div);

    });
}















/* const clickToPlay = document.querySelector('play');

document.querySelector('input').onchange = e =>{
    const file = e.target.files[0];
    const reader = new FileReader();
    
    reader.onload = function (e){
        playSong(e.target.result);
    }
    
    reader.readAsDataURL(file);
    

    
};


function createBotaoOfBoard()
{

}

function playSong(path)
{
    play.addEventListener('click', (e) => {
        audio.play();
    })
} */

    // Criar o layout de cada Caixa contendo um som do meu soundbord => 8 ou mais
    

