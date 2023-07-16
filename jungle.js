window.addEventListener('DOMContentLoaded', (event) => {
    const soundButton = document.getElementById('soundButton');
    const audio = new Audio('ヒグラシ.mp3');
    let isPlaying = false;

    soundButton.addEventListener('click', () => {
        if (!isPlaying) {
            playSound();
        } else {
            pauseSound();
        }
    });

    function playSound() {
        audio.play();
        soundButton.textContent = 'Pause Jungle Sounds';
        isPlaying = true;
    }

    function pauseSound() {
        audio.pause();
        soundButton.textContent = 'Play Jungle Sounds';
        isPlaying = false;
    }

    // 追加機能のサンプル
    const showDateButton = document.getElementById('showDateButton');
    const dateContainer = document.getElementById('dateContainer');

    showDateButton.addEventListener('click', () => {
        const currentDate = new Date().toLocaleDateString();
        dateContainer.textContent = `Today's date is: ${currentDate}`;
    });
});
