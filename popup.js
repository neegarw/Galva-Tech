const consultBtn = document.getElementById('consultBtn');
const consultBtn2 = document.getElementById('consultBtn2');
const overlay = document.getElementById('consultOverlay');
const closeOverlay = document.getElementById('closeOverlay');

consultBtn.addEventListener('click', () => {
    overlay.classList.remove('hidden');
});
consultBtn2.addEventListener('click', () => {
    overlay.classList.remove('hidden');
});

closeOverlay.addEventListener('click', () => {
    overlay.classList.add('hidden');
});

overlay.addEventListener('click', (e) => {
    if (e.target === overlay) {
        overlay.classList.add('hidden');
    }
});