
class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.targetDate = new Date(targetDate);
    this.intervalId = null,
    this.daysRef = document.querySelector(`${selector} .value[data-value="days"]`);
    this.hoursRef = document.querySelector(`${selector} .value[data-value="hours"]`);
    this.minutesRef = document.querySelector(`${selector} .value[data-value="mins"]`);
    this.secondsRef = document.querySelector(`${selector} .value[data-value="secs"]`);
    this.start();
  }
  
  start() {
    setInterval(() => {
      const date = new Date();
      const time = this.targetDate - date;

      if (time >= 0) {
        this.daysRef.innerHTML = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
        this.hoursRef.innerHTML = this.pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
        this.minutesRef.innerHTML = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
        this.secondsRef.innerHTML = this.pad(Math.floor((time % (1000 * 60)) / 1000));
      } else {
        clearInterval(this.intervalId);
      }
    }, 1000);
  }

  pad(value) {
    return String(value).padStart(2, '0');
  }
};

new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Jun 1, 2021'),
});