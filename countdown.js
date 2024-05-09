// GLOBAL VARIABLES
//const launchDate = new Date().getTime(); 

// Calculate future launch date
const futureDate = new Date();  
futureDate.setDate(futureDate.getDate() + 30);

// Launch timestamp   
const launchDate = futureDate.getTime();

// OTHER CONSTANTS

// GET ELEMENTS  
const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours'); 
const minutesEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');
const second = 1000;  
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24;
// UPDATE COUNTDOWN FUNCTION
function updateCountdown() {

  // CALCULATE TIME DIFFERENCE

  const distance = launchDate - Date.now();  

  // CALCULATE TIME PERIODS
  const days = Math.floor(distance / day);
  const hours = Math.floor((distance % day) / hour); 
  const minutes = Math.floor((distance % hour) / minute);
  const seconds = Math.floor((distance % minute) / second);

  // UPDATE DOM ELEMENTS
  daysEl.innerHTML = days;
  hoursEl.innerHTML = hours;
  minutesEl.innerHTML = minutes;
  secondsEl.innerHTML = seconds;

  // CHECK FOR LAUNCH
  if(distance < 0) {
    // LAUNCHED MESSAGE 
  }

}

// RUN INTERVAL
setInterval(updateCountdown, 1000);

// INITIAL CALL
updateCountdown();