const monthName = document.getElementById("month-name");
const dayName = document.getElementById("day-name");
const dayNumber = document.getElementById("day-number");
const yearEl = document.getElementById("year");

const date = new Date();
const month = date.getMonth()


monthName.innerText = date.toLocaleString("en", {
    month:"long"
})
dayName.innerText = date.toLocaleString("en", {
    weekday: "long"
})
dayNumber.innerText = date.toLocaleString("en", {
    day:"2-digit"
})
yearEl.innerText = date.getFullYear();