document.addEventListener('DOMContentLoaded', function () {
    const nightModeBtn = document.getElementById('night-mode-btn');
    let isNightMode = false;

    nightModeBtn.addEventListener('click', function () {
        if (isNightMode) {
            document.body.classList.remove('night-mode');
            nightModeBtn.textContent = 'Off';
        } else {
            document.body.classList.add('night-mode');
            nightModeBtn.textContent = 'On';
        }
        isNightMode = !isNightMode;
    });
});
