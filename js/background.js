const images = [
    "massimiliano-donghi-D6bwkHHNHSA-unsplash.jpg",
    "abdul-mukheem-shaik-ytj13TMmn6Y-unsplash.jpg",
    "armands-brants-J9j0xCbyi5A-unsplash.jpg",
    "axp-photography-8wd0Bgb5Kjg-unsplash.jpg",
    "cristina-gottardi-CSpjU6hYo_0-unsplash.jpg",
    "dario-veronesi-lUO-BjCiZEA-unsplash.jpg",
    "irfan-simsar-Hcge9Ao6O5g-unsplash.jpg",
    "jason-ortego-TznjqhCHR9g-unsplash.jpg",
    "john-fowler-03Pv2Ikm5Hk-unsplash.jpg",
    "marek-piwnicki-FrQjnVgiFPQ-unsplash.jpg",
];

function getBackground() {
    const chosenImage = images[Math.floor(Math.random() * images.length)];
    const bgImage = document.createElement("img");

    bgImage.src = `img/${chosenImage}`;
    document.body.appendChild(bgImage);
}

getBackground();