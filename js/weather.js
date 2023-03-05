function onGeoSuccess(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    console.log(lat, lon);
}

function onGeoFailure(error) {
    alert("Error: " + JSON.stringify(error));
}

navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoFailure);