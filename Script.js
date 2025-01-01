const targetDate = new Date("August 6, 2024 20:30:45").getTime();

// Update the elapsed time every second
const interval = setInterval(() => {
    const now = new Date().getTime();
    const difference = now - targetDate; // Time passed since the target date

    // Ensure the calculation is valid only for elapsed time
    if (difference <= 0) {
        document.getElementById("Months").innerHTML = "The target date has not yet passed!";
        clearInterval(interval);
        return;
    }

    // Calculate months, days, hours, minutes, and seconds
    const months = Math.floor(difference / (1000 * 60 * 60 * 24 * 30)); // Approximate months
    const days = Math.floor((difference % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    // Display the elapsed time
    document.getElementById("Months").innerHTML =
        months + " Months " 
    document.getElementById("Days").innerHTML =
        days + " Days "
    document.getElementById("Hours").innerHTML =
        hours.toString().padStart(2, "0") + ":" +
        minutes.toString().padStart(2, "0") + ":" +
        seconds.toString().padStart(2, "0");
}, 1000);

document.getElementById("ruhiimage").addEventListener("click", function() {
    window.open("ruhi.html");
});




