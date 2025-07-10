const startBtn = document.getElementById("start");
const stopBtn = document.getElementById("stop");
const resetBtn = document.getElementById("reset")

let listType = document.getElementById("output")
let notePut = document.getElementById("note")

let min = sec = ms = 0, starTimer;
stopBtn.style.display = "none"
resetBtn.style.display = 'none'
startBtn.style.display = 'block'
notePut.style.display = "none"


startBtn.addEventListener("click", () => {
    stopBtn.style.display = "block"
    resetBtn.style.display = 'block'
    startBtn.style.display = 'none'
    notePut.style.display = "block"
    // currentTime.style.display='none'

    startBtn.classList.add("start-active")
    stopBtn.classList.remove("stop-active")
    starTimer = setInterval(() => {
        ms++;
        if (ms == 100) {
            sec++
            ms = 0
        }

        if (sec == 60) {
            min++
            sec = 0
        }
        updateDisplay()
    }, 10);

})
stopBtn.addEventListener("click", () => {
    startBtn.style.display = 'block'
    stopBtn.style.display = "none"
    notePut.style.display = "block"


    startBtn.classList.remove("start-active")
    stopBtn.classList.add("stop-active")
    clearInterval(starTimer)
    updateDisplay()

})
resetBtn.addEventListener("click", () => {
    stopBtn.style.display = 'none'
    startBtn.style.display = 'block'
    resetBtn.style.display = 'none'
    notePut.style.display = "none"

    startBtn.classList.remove("start-active")
    stopBtn.classList.remove("stop-active")
    min = sec = ms = 0;

    clearInterval(starTimer)
    updateDisplay()
    listType.innerHTML="";

})

notePut.addEventListener("click", () => {

    let tmin = min < 10 ? '0' + min : min
    let tsec = sec < 10 ? '0' + sec : sec
    let tms = ms < 10 ? '0' + ms : ms

    currentTime = `${tmin}:${tsec}.${tms}`;
    listType.innerHTML += `<li >${currentTime}</li>`
    notePut.style.display = "block"


});

function updateDisplay() {
    let tmin = min < 10 ? '0' + min : min
    let tsec = sec < 10 ? '0' + sec : sec
    let tms = ms < 10 ? '0' + ms : ms
    document.getElementById("min").innerText = tmin;
    document.getElementById("sec").innerText = tsec;
    document.getElementById("ms").innerText = tms;
}
