document.getElementById('logar-link').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('modal-overlay').style.display = 'flex';
});

document.getElementById('close-modal').addEventListener('click', function() {
    document.getElementById('modal-overlay').style.display = 'none';
});