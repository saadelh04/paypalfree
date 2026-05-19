let step = 1;

function showStep(n){
    document.querySelectorAll(".step").forEach(s => s.classList.remove("active"));
    document.getElementById("step"+n).classList.add("active");
}

function nextStep(){
    step++;
    showStep(step);

    if(step === 3){
        startProgress();
    }
}

function startProgress(){
    let p = 0;
    let el = document.getElementById("progress");

    let int = setInterval(() => {
        p += 5;
        el.innerText = "Processing: " + p + "%";

        if(p >= 100){
            clearInterval(int);

            // 🔥 CPA Redirect (CHANGE THIS)
            setTimeout(() => {
                window.location.href = "https://smrturl.co/a/sa1758827e2/576?s1=";
            }, 800);
        }
    }, 120);
}
