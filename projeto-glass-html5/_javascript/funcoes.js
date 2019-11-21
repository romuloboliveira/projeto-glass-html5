function mudaFoto(foto) {
    document.getElementById("icone").src = foto;
}

const nightMode = document.querySelector('#night-mode');
localStorage.setItem('mode', (localStorage.getItem('mode') || 'dark') === 'dark' ? 'light' : 'dark'); localStorage.getItem('mode') === 'dark' ? document.querySelector('body').classList.add('dark') : document.querySelector('body').classList.remove('dark')
