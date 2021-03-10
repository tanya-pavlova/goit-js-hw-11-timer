
const refs = {    
    days: document.querySelector('[data-value="days"]'),
    hours: document.querySelector('[data-value="hours"]'),
    mins: document.querySelector('[data-value="mins"]'),
    secs: document.querySelector('[data-value="secs"]'),
};
  
class CountdownTimer {
    constructor({ selector , targetDate }) {
      this.selector = selector;
      this.targetDate = targetDate;
      this.intervalId = null;
    }
   
 
    start() {        
        const currentTime = Date.now();
        const deltaTime = this.targetDate - currentTime;
        const time = this.getTheValue(deltaTime);
        this.intervalId = setInterval(() => {
          const currentTime = Date.now();
          const deltaTime = this.targetDate - currentTime;
          this.getTheValue(deltaTime);
        }, 1000);
      }
  
    getTheValue(time) {
    const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
    const hours = this.pad(
    Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    );
    const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));

    refs.days.textContent = days;
    refs.hours.textContent = hours;
    refs.mins.textContent = mins;
    refs.secs.textContent = secs;
    }
  
    pad(value) {
    return String(value).padStart(2, '0');
    }
}
  
const timer = new CountdownTimer({
    selector: "#timer-1",
    targetDate: new Date('Mar 31, 2021')
    
});

timer.start();