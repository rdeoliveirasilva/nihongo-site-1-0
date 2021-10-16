// Frases do Diálogo
function createPlayer(audioURL, parentElement) {
    var playPauseButton = document.createElement('button');
    var i = document.createElement('i');
    
    // Cria o botão padrão de 'play audio'
    i.classList.add('material-icons');
    i.innerHTML = 'play_arrow';
    playPauseButton.appendChild(i);

    // Cria um player de áudio com a track a ser executada
    var audio = document.createElement("AUDIO");
    audio.setAttribute("src", audioURL);
    audio.setAttribute("preload", "metadata|auto");

    // Função que escuta quando a track se encerra e altera o botão para 'play audio' novamente
    audio.addEventListener('ended', () => {
        i.innerHTML = 'play_arrow';
    });

    // Função que altera o botão entre 'play' e 'pause' baseado no status da track
    playPauseButton.addEventListener('click', () => {
        if (audio.paused) {
            i.innerHTML = 'pause';
            audio.play();
        } else if (audio.played) {
            i.innerHTML = 'play_arrow';
            audio.pause();
        }
    });

    parentElement.appendChild(playPauseButton);
}
