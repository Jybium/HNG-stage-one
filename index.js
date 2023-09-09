const DisplayTime = document.querySelector("#Time");
const DisplayDay = document.querySelector("#Day");

const daysOfTheWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const currentDate = new Date();
const currentTime = Date.now();

const Day = daysOfTheWeek[currentDate.getDay()];

DisplayDay.textContent = ` DAY OF THE WEEK: ${Day}`;
DisplayTime.textContent = `CURRENT UTC: ${currentTime}`;

alert(currentDate.toISOString());
console.log(Date.now());
