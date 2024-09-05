let timer
let seconds = 0
let run = false



const numbersElement = document.getElementById('numbers')
const startBtn = document.getElementById('start')
const stopBtn = document.getElementById('stop')
const resetBtn = document.getElementById('reset')




const secundomer = () => {
    const minute = Math.floor(seconds / 3600)
    const secs = Math.floor((seconds % 3600) / 60)
    const mili = seconds % 60

    numbersElement.innerHTML = minute + ":" + secs + ":" + mili
};




const startTimer = () => {
    if (run === false) {
        timer = setInterval(() => {
            seconds++
            secundomer()
        }, 10)
        run = true
    }
};

const stopTimer = () => {
    clearInterval(timer)
    run = false
}

const resetTimer = () => {
    clearInterval(timer)
    seconds = 0
    secundomer()
    run = false
}



startBtn.onclick = () => {
    startTimer()
}

stopBtn.onclick = () => {
    stopTimer()
}

resetBtn.onclick = () => {
    resetTimer()
}