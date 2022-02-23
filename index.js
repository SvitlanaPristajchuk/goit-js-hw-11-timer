const refs = {
    timer: document.querySelector("#timer-1"),
    days: document.querySelector('[data-value="days"]'),
    hours: document.querySelector('[data-value="hours"]'),
    mins: document.querySelector('[data-value="mins"]'),
    secs: document.querySelector('[data-value="secs"]'),
}

class Timer {
    constructor({ selector, targetDate }) {
        this.selector = selector;
        this.targetDate = targetDate;

        this.refs = {
            timerBox: document.querySelector('#timer-1'),
            daysTimer: document.querySelector(`${selector} span[data-value="days"]`),
            hoursTimer: document.querySelector(`${selector} span[data-value="hours"]`),
            minutesTimer: document.querySelector(`${selector} span[data-value="mins"]`),
            secondsTimer: document.querySelector(`${selector} span[data-value="secs"]`),
        };
        this.start();
    }

    start() {
        setInterval(() => {           
            this.updateClockface(
                new TimeValue(this.targetDate).Value()
            );
        }, 1000);
    }
    
    updateClockface({ days, hours, mins, secs }) {
        this.refs.daysTimer.innerHTML = days;
        this.refs.hoursTimer.innerHTML = hours;
        this.refs.minutesTimer.innerHTML = mins;
        this.refs.secondsTimer.innerHTML = secs;
    }
}

class TimeValue {
    constructor(value) {
        if (value === undefined || value === null) {
           console.log('Parameter is null or undefined.');    
        }  
      this.value = value;
  }        
  
 Value() {
      let time = this.value - Date.now();

      let days = pad(Math.floor(time / (1000 * 60 * 60 * 24)));
      let hours = pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
      let mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
      let secs = pad(Math.floor((time % (1000 * 60)) / 1000));

      return { days, hours, mins, secs };
  }
}

function pad(value) {
    return String(value).padStart(2, '0');
}
const CountDownTimer = new Timer({
    selector: '#timer-1',
    targetDate: new Date('August 17, 2021'),
});