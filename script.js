let time = 60;
let countdown = document.getElementById("countdown");

setInterval(() => {
    time--;
    countdown.innerText = "Offer expires in: " + time;

    if(time <= 0){
        countdown.innerText = "Offer expired!";
    }
}, 1000);

document.getElementById("leadForm").addEventListener("submit", function(e){
    e.preventDefault();
    alert("Redirecting to offer...");
    window.location.href = "https://smrturl.co/a/sa1758827e2/576?s1=";
});