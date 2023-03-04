const clock = document.querySelector('h2#clock');

function getClock() {
    const date = new Date();
    clock.innerText = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
}

getClock();
setInterval(getClock, 1000);    // repeat, every 1 seconds
// setTimeout(getClock, 5000);     // once, after 5 seconds