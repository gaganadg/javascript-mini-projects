function updateClock() {
    const now = new Date();

    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    // Add leading zeros 
    hours = hours.toString().padStart(2, "0");
    minutes = minutes.toString().padStart(2, "0");
    seconds = seconds.toString().padStart(2, "0");

    const currentTime = `${hours}:${minutes}:${seconds}`;

    document.getElementById("clock").textContent = currentTime;
}

// Run every second
setInterval(updateClock, 1000);

// Run once immediately so it doesn't wait 1 second
updateClock();
