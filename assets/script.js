document.addEventListener('DOMContentLoaded', function () {
    var openModalBtns = document.querySelectorAll('.open-modal-btn');
    var overlay = document.getElementById('danceModal');
    var closeModalBtn = document.getElementById('closeModal');
    var modalTitle = document.getElementById('modalTitle');
    var modalDescription = document.getElementById('modalDescription');

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
