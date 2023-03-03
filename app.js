const h1 = document.querySelector("div.hello:first-child h1");

let btn = true;

function handleTitleClick() {
    console.log("h1 was clicked");
    btn = !btn;
    if (btn) {
        h1.style.color = "blue";
    } else {
        h1.style.color = "green";
    }
}

function handleMouseEnter() {
    console.log("h1 was mouse entered");
    btn = !btn;
    if (btn) {
        h1.style.color = "red";
    } else {
        h1.style.color = "yellow";
    }
}

function handleMouseLeave() {
    console.log("h1 was mouse left");
    h1.style.color = "black";
}

function handleWindowResize() {
    document.body.style.backgroundColor = "tomato";
}

function handleWindowCopy() {
    alert("copier!");
}

function handleWindowOffline() {
    alert("SOS no WIFI!");
}

function handleWindowOnline() {
    alert("All Goood");
}

h1.addEventListener("click", handleTitleClick);
h1.addEventListener("mouseenter", handleMouseEnter);
h1.addEventListener("mouseleave", handleMouseLeave);

window.addEventListener("resize", handleWindowResize);
window.addEventListener("copy", handleWindowCopy);

window.addEventListener("offline", handleWindowOffline);
window.addEventListener("online", handleWindowOnline);