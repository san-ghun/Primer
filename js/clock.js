const clock = document.querySelector('h2#clock-text');

function getClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');;
    const seconds = String(date.getSeconds()).padStart(2, '0');;
    clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getClock();
setInterval(getClock, 1000);    // repeat, every 1 seconds
// setTimeout(getClock, 5000);     // once, after 5 seconds