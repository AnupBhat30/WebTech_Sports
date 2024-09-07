document.addEventListener('DOMContentLoaded', function () {
    const decreaseDurationBtn = document.getElementById('decrease-duration');
    const increaseDurationBtn = document.getElementById('increase-duration');
    const durationDisplay = document.getElementById('duration');
    const addToCartBtn = document.getElementById('add-to-cart');
    const courtSelect = document.getElementById('court');

    let duration = 1;

    decreaseDurationBtn.addEventListener('click', function () {
        if (duration > 1) {
            duration--;
            updateDuration();
        }
    });

    increaseDurationBtn.addEventListener('click', function () {
        duration++;
        updateDuration();
    });

    courtSelect.addEventListener('change', function () {
        if (courtSelect.value !== '') {
            addToCartBtn.classList.add('enabled');
            addToCartBtn.disabled = false;
        } else {
            addToCartBtn.classList.remove('enabled');
            addToCartBtn.disabled = true;
        }
    });

    function updateDuration() {
        durationDisplay.textContent = `${duration} Hr${duration > 1 ? 's' : ''}`;
    }
});
