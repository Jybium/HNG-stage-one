const DisplayTime = document.querySelector("#Time");
const DisplayDay = document.querySelector("#Day");

const currentDate = new Date();
const currentTime = Date.now();

DisplayDay.textContent = ` Day of the week: ${currentDate}`;
DisplayTime.textContent = `Current UTC: ${currentTime}`;

alert(currentDate);
console.log(Date.now());
