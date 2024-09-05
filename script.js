const bar = document.querySelector(".bar")
const progress = document.querySelector(".progress")
const span = document.querySelector("span")
const button = document.querySelector("button")

function downloadInit () {
    
    let width = 1;

    const interval = setInterval(() => {
        width++
        if (width <= 100) {
            progress.style.width = width + "%"
            span.textContent = width + "%"
        } else {
            clearInterval(interval);
            setTimeout(() => {
                progress.style.width = "0%";
                span.textContent = "0%";
        }, 5000);
        }
        
    }, 100);
}

