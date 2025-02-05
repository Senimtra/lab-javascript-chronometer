// ############################
// ## Iteration 1: The logic ##
// ############################

class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.milliSeconds = 0;
    this.intervalId = null;
  }

  start(callback) {
    this.intervalId = setInterval(() => {
      this.milliSeconds += 1;
      if (callback) callback();
      if (this.milliSeconds % 100 === 0) {
        this.currentTime += 1;
      }
    }, 10);
  }

  getMinutes() {
    return Math.floor(this.currentTime / 60);
  }

  getSeconds() {
    return this.currentTime % 60;
  }

  getMilliseconds() {
    return (this.milliSeconds * 0.01).toFixed(2).slice(-2);
  }

  computeTwoDigitNumber(value) {
    return (value * 0.01).toFixed(2).split('.')[1];
  }

  stop() {
    clearInterval(this.intervalId);
  }

  reset() {
    this.currentTime = 0;
    this.milliSeconds = 0;
  }

  split() {
    let mins = this.computeTwoDigitNumber(this.getMinutes());
    let secs = this.computeTwoDigitNumber(this.getSeconds());
    return `${mins}:${secs}`;
  }

  splitMs() {
    let mill = this.computeTwoDigitNumber(this.getMilliseconds());
    return `:${mill}`;
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
