const daysRef = document.querySelector('span[data-value="days"]');
const hoursRef = document.querySelector('span[data-value="hours"]');
const minsRef = document.querySelector('span[data-value="mins"]');
const secsRef = document.querySelector('span[data-value="secs"]');

class CountdownTimer {
  constructor({ targetDate } = {}) {
    this.targetDate = targetDate;
    this.start();
  }

  start() {
    this.getTime();
    setInterval(() => {
      this.getTime();
    }, 1000);
  }

  getTime() {
    const currentTime = Date.now();
    const deltaTime = this.targetDate - currentTime;
    this.getTimeComponents(deltaTime);
  }

  getTimeComponents(time) {
    const days = Math.floor(time / (1000 * 60 * 60 * 24));
    const hours = this.pad(
      Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    );
    const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));

    this.updateTime(days, hours, mins, secs);
  }

  pad(value) {
    return String(value).padStart(2, '0');
  }

  updateTime(days, hours, mins, secs) {
    daysRef.textContent = `${days}`;
    hoursRef.textContent = `${hours}`;
    minsRef.textContent = `${mins}`;
    secsRef.textContent = `${secs}`;
  }
}


const timer = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Jun 1, 2021'),
});



    
