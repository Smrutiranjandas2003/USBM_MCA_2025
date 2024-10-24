document.getElementById('stBtn').addEventListener('click', function() {
    const timeout = parseInt(document.getElementById('time').value);
    let timeLeft = timeout;

    if (isNaN(timeLeft) || timeLeft <= 0) {
        alert('Please enter a valid number.');
        return;
    }

    const output = document.getElementById('output');
    output.textContent = `Time left: ${timeLeft} seconds`;

    const timer = setInterval(() => {
        timeLeft--;
        output.textContent = `Time left: ${timeLeft} seconds`;

        if (timeLeft <= 0) {
            clearInterval(timer);
            output.textContent = 'Time is up!';
        }
    }, 1000);
});
