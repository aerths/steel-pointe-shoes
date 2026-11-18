document.addEventListener('DOMContentLoaded', function () {
    const openModalBtns = document.querySelectorAll('.open-modal-btn');
    const overlay = document.getElementById('danceModal');
    const closeModalBtn = document.getElementById('closeModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalDescription = document.getElementById('modalDescription');

    openModalBtns.forEach(function (btn) {
        btn.addEventListener('click', function (e) {
            e.preventDefault();
            modalTitle.textContent = btn.getAttribute('data-title');
            modalDescription.textContent = btn.getAttribute('data-description');
            overlay.classList.add('active');
        });
    });

    closeModalBtn.addEventListener('click', function () {
        overlay.classList.remove('active');
    });

    overlay.addEventListener('click', function (e) {
        if (e.target === overlay) {
            overlay.classList.remove('active');
        }
    });

    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') {
            overlay.classList.remove('active');
        }
    });
});