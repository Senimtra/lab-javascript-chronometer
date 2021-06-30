// ###################################
// ## Iteration 2: DOM Manipulation ##
// ###################################

const chronometer = new Chronometer();

// get the buttons:
const btnLeftElement = document.getElementById('btnLeft');
const btnRightElement = document.getElementById('btnRight');

// get the DOM elements that will serve us to display the time:
const minDecElement = document.getElementById('minDec');
const minUniElement = document.getElementById('minUni');
const secDecElement = document.getElementById('secDec');
const secUniElement = document.getElementById('secUni');
const milDecElement = document.getElementById('milDec');
const milUniElement = document.getElementById('milUni');
const splitsElement = document.getElementById('splits');

function printTime() {
  printMinutes();
  printSeconds();
}

function printMinutes() {
  minDecElement.innerHTML = chronometer.computeTwoDigitNumber(
    chronometer.getMinutes()
  )[0];
  minUniElement.innerHTML = chronometer.computeTwoDigitNumber(
    chronometer.getMinutes()
  )[1];
}

function printSeconds() {
  secDecElement.innerHTML = chronometer.computeTwoDigitNumber(
    chronometer.getSeconds()
  )[0];
  secUniElement.innerHTML = chronometer.computeTwoDigitNumber(
    chronometer.getSeconds()
  )[1];
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

// #############################
// ## Iteration 3: Split time ##
// #############################

function printSplit() {
  newSplitElement = document.createElement('li');
  newSplitElement.innerText = chronometer.split();
  splitsElement.appendChild(newSplitElement);
}

// ########################
// ## Iteration 4: Reset ##
// ########################

function clearSplits() {
  splitsElement.querySelectorAll('li').forEach((n) => n.remove());
}

function setStopBtn() {
  btnLeftElement.setAttribute('class', 'btn stop');
  btnLeftElement.innerHTML = 'STOP';
}

function setSplitBtn() {
  btnRightElement.setAttribute('class', 'btn split');
  btnRightElement.innerHTML = 'SPLIT';
}

function setStartBtn() {
  btnLeftElement.setAttribute('class', 'btn start');
  btnLeftElement.innerHTML = 'START';
}

function setResetBtn() {
  btnRightElement.setAttribute('class', 'btn reset');
  btnRightElement.innerHTML = 'RESET';
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  if (btnLeftElement.getAttribute('class') === 'btn start') {
    setStopBtn();
    setSplitBtn();
    chronometer.start(printTime);
  } else {
    setStartBtn();
    setResetBtn();
    chronometer.stop();
  }
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  if (btnRightElement.getAttribute('class') === 'btn split') {
    printSplit();
  } else {
    clearSplits();
    chronometer.reset();
    printTime();
  }
});
