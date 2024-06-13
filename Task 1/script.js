function calculate() {
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;

    const endTime = new Date(date + " " + time);

    const interval = setInterval(() => calculateTime(endTime), 1000);


    // stop button
    const stop = document.getElementById('stop');
    stop.addEventListener('click', () => {
        clearInterval(interval);
    })

    // reset button
    const reset = document.getElementById('reset');
    reset.addEventListener('click', () => {
        clearInterval(interval);
        document.getElementById('countdown-days').innerText = 0;
        document.getElementById('countdown-hours').innerText = 0;
        document.getElementById('countdown-minutes').innerText = 0;
        document.getElementById('countdown-seconds').innerText = 0;
        document.getElementById('date').value= "";
        document.getElementById('time').value= "";
    })
}

function calculateTime(endTime) {
    const currentTime = new Date();

    const days = document.getElementById('countdown-days');
    const hours = document.getElementById('countdown-hours');
    const minutes = document.getElementById('countdown-minutes');
    const seconds = document.getElementById('countdown-seconds');

    if (endTime > currentTime) {
        const timeLeft = (endTime - currentTime) / 1000;

        days.innerText = Math.floor(timeLeft / (24 * 60 * 60));
        hours.innerText = Math.floor((timeLeft / (60 * 60)) % 24);
        minutes.innerText = Math.floor((timeLeft / 60) % 60);
        seconds.innerText = Math.floor(timeLeft % 60);
    }
    else {
        days.innerText = 0;
        hours.innerText = 0;
        minutes.innerText = 0;
        seconds.innerText = 0;
    }
}