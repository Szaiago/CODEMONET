document.getElementById('close-modal').addEventListener('click', function() {
    document.getElementById('modal-overlay').style.display = 'none';
});

document.getElementById('config-link').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('config-overlay').style.display = 'flex';
});

document.getElementById('close-config-modal').addEventListener('click', function() {
    document.getElementById('config-overlay').style.display = 'none';
});

function toggleNightMode() {
    var nightModeBtn = document.getElementById('night-mode-btn');
    if (nightModeBtn.textContent === 'OFF') {
        // Ativar modo noturno
        nightModeBtn.textContent = 'ON';
        document.body.style.backgroundColor = 'black';
        nightModeBtn.style.backgroundColor = 'lightgreen';
        nightModeBtn.style.boxShadow = '0 0 15px green';
    } else {
        // Desativar modo noturno
        nightModeBtn.textContent = 'OFF';
        document.body.style.backgroundColor = 'white';
        nightModeBtn.style.backgroundColor = '';
        nightModeBtn.style.boxShadow = '';
    }
}