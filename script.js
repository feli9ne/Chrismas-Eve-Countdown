const dayCount = document.getElementById('days')
const hourCount = document.getElementById('hours')
const minuteCount = document.getElementById('minutes')
const secondCount = document.getElementById('seconds')
const chrisEve = '25 Dec 2022';

function countdown() {
 const chrisEveDate = new Date(chrisEve);
 const currentDate = new Date();
 const totalSeconds = (chrisEveDate - currentDate) / 1000

 const days = Math.floor(totalSeconds / 3600 / 24)
 const hours = Math.floor(totalSeconds / 3600) % 24
 const minutes = Math.floor(totalSeconds / 60) % 60
 const seconds = Math.floor(totalSeconds)%60
 console.log(chrisEveDate - currentDate);

 console.log(days, hours, minutes, seconds)

 dayCount.innerHTML = days
 hourCount.innerHTML = newTime(hours)
 minuteCount.innerHTML = newTime(minutes)
 secondCount.innerHTML = newTime(seconds)
}
countdown()
setInterval(countdown, 1000)

function newTime(time) {
  return time<10 ? `0${time}` : time
}

