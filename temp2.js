// var deadline = new Date(Date.parse(new Date()) + 30 * 24 * 60 * 60 * 1000);
// initializeClock('clockdiv', deadline);

function getTimeRemaining(endtime) {
  
  const now = new Date().getTime;
  var t = endtime - now;
  var seconds = Math.floor((t / 1000) % 60);
  var minutes = Math.floor((t / 1000 / 60) % 60);
  var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
  var days = Math.floor(t / (1000 * 60 * 60 * 24));
  return {
    'total': t,
    'days': days,
    'hours': hours,
    'minutes': minutes,
    'seconds': seconds
  };
}

function initializeClock(id, endtime) {
  var clock = document.getElementById(id);
  var daysSpan = clock.querySelector('.days');
  var hoursSpan = clock.querySelector('.hours');
  var minutesSpan = clock.querySelector('.minutes');
  var secondsSpan = clock.querySelector('.seconds');

  function updateClock() {
    var t = getTimeRemaining(endtime);

    daysSpan.innerHTML = t.days;
    hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
    minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
    secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

    if (t.total <= 0) {
      clearInterval(timeinterval);
    }
  }

  updateClock();
  var timeinterval = setInterval(updateClock, 1000);
}

var deadline = new Date(Date.parse(new Date()) + 30 * 24 * 60 * 60 * 1000);
var time = localStorage.getItem('saved_timer');
if(time == null) {
    localStorage.setItem('saved_timer', saved_timer);
    const saved_timer = (deadline);
    time = saved_timer;
}


// const timerValue = new Date(Date.parse(new Date()) + 30 * 24 * 60 * 60 * 1000);;
// let time = localStorage.getItem('saved_timer');
// if(time == null) {
//     const saved_timer = (timerValue);
//     localStorage.setItem('saved_timer', saved_timer);
//     time = saved_timer;
// }

// deadline=time;
initializeClock('clockdiv', time);


// const timerValue =20; // this value is in seconds

// let time = localStorage.getItem('saved_timer');
// if(time == null) {
//     const saved_timer = new Date().getTime() + (timerValue * 1000);
//     localStorage.setItem('saved_timer', saved_timer);
//     time = saved_timer;
// }

// const timerID = setInterval(() => {
//     const now = new Date().getTime();
//     const difference = time - now;

    
//     const totalSeconds = Math.floor(difference/1000);
//     const minutes = Math.floor(totalSeconds / 60);
//     const seconds = totalSeconds % 60;
//     document.querySelector("#clockdiv").innerText = 'Time Left: ' + minutes + ':' + ((seconds < 10) ? '0' + seconds : seconds);
    
//     if(totalSeconds <= 0) {
//         clearInterval(timerID);
//         localStorage.removeItem('saved_timer');
//     }
// }, 1000);