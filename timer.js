
class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.selector = selector;
    this.targetDate = targetDate;
    this.start();
    this.refs = {
       daysRef : document.querySelector('span[data-value="days"]'),
       hoursRef : document.querySelector('span[data-value="hours"]'),
       minsRef : document.querySelector('span[data-value="mins"]'),
       secsRef : document.querySelector('span[data-value="secs"]'),
    }    
  }


  start() {
    setInterval(() => {
      const currentTime = Date.now();
      const deltaTime = this.targetDate - currentTime;
      this.getTimeComponents(deltaTime);
    }, 1000);
  };

 
  getTimeComponents(time) {
    const days = Math.floor(time / (1000 * 60 * 60 * 24));
    const hours = this.pad(
      Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    );
    const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));

    this.refs.daysRef.textContent = `${days}`;
    this.refs.hoursRef.textContent = `${hours}`;
    this.refs.minsRef.textContent = `${mins}`;
    this.refs.secsRef.textContent = `${secs}`;
  }

  pad(value) {
    return String(value).padStart(2, '0');
  }
};

const timer = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Jun 1, 2021'),
});



    
