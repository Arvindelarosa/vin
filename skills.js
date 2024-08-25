document.addEventListener('DOMContentLoaded', function() {
    // Select all audio tracks
    const audioTracks = document.querySelectorAll('.audio-track');

    // Create disco light element
    const discoLight = document.createElement('div');
    discoLight.className = 'disco-light';
    document.querySelector('.music').appendChild(discoLight);

    // Add event listeners to each audio track
    audioTracks.forEach(audio => {
        audio.addEventListener('play', () => {
            discoLight.style.animation = 'disco 1s infinite';
            changeBackgroundColor();
        });

        audio.addEventListener('pause', () => {
            discoLight.style.animation = 'none';
            stopBackgroundColorChange();
        });

        audio.addEventListener('ended', () => {
            discoLight.style.animation = 'none';
            stopBackgroundColorChange();
        });
    });

    let colorInterval;

    function changeBackgroundColor() {
        const colors = ['#ff0000', '#00ff00', '#0000ff', '#ff00ff', '#00ffff', '#ffff00'];
        let i = 0;

        colorInterval = setInterval(() => {
            document.body.style.backgroundColor = colors[i];
            i = (i + 1) % colors.length;
        }, 500);
    }

    function stopBackgroundColorChange() {
        clearInterval(colorInterval);
        document.body.style.backgroundColor = '#000'; // Reset to black when music stops
    }
});
