var body = document.getElementById("content")
var playPauseButton = document.createElement('button');
var i = document.createElement('i')
var hr = document.createElement("hr")

// Cria um parágrafo com o nome da track que será executada
var newParagraph = document.createElement('p')
newParagraph.appendChild(
    document.createTextNode("Luna Haruna - Overfly")
)
newParagraph.classList.add('trackAlign')

// Cria o botão padrão de 'play audio'
i.classList.add('material-icons');
i.innerHTML = 'play_circle_filled'
playPauseButton.appendChild(i)

// Cria um player de áudio com a track a ser executada
var audio = document.createElement("AUDIO")
audio.setAttribute("src", "/src/mp3/54. Overfly.mp3")

// Função que escuta quando a track se encerra e altera o botão para 'play audio' novamente
audio.addEventListener('ended', () => {
    i.innerHTML = 'play_circle_filled'
});

// Função que altera o botão entre 'play' e 'pause' baseado no status da track
playPauseButton.addEventListener('click', () => {
    if (audio.paused) {
        i.innerHTML = 'pause_circle_filled'
        audio.play();
    } else if (audio.played) {
        i.innerHTML = 'play_circle_filled'
        audio.pause();
    }
});

// Insere ambos, botão e nome da track, na página
newParagraph.appendChild(playPauseButton)
newParagraph.appendChild(hr)

document.getElementById("innerContent").appendChild(newParagraph)