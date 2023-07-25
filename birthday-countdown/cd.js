const timeleft = document.getElementById('time-left')

const ev = new Date().getFullYear() + 1
const sznap = new Date(ev,0,23,0,0,0,0)
const masodp = 1000
const perc = masodp * 60
const ora = perc * 60 
const nap = ora * 24 //millisec
let timerID

function countDown() {
    const ma = new Date()
    const timeSpan = sznap - ma
    console.log(timeSpan)
    console.log(sznap)

    if (timeSpan <= -nap){
        timeleft.innerHTML= "Remélem jól telt a szülinapod hogy szakadnál meg"
        clearInterval(timerID)
        return
    }
    if (timeSpan <= 0) {
        timeleft.innerHTML = "Boldog Születésnapot te vak cigány!"
        clearInterval(timerID)
        return
    }

    const napok = Math.floor(timeSpan / nap)
    const orak = Math.floor((timeSpan % nap) / ora)
    const percek = Math.floor((timeSpan % ora) / perc)
    const masodpercek = Math.floor((timeSpan % perc) / masodp)

    timeleft.innerHTML = napok +  ' nap ' + orak + ' óra ' + percek + ' perc ' + masodpercek + ' másodperc'
}

setInterval(countDown, masodp)