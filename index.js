"use strict";
let hour = prompt("Enter your hour");
if (hour === null) {
  alert("Please enter a valid hour");
} else {
  if (hour === 0) {
    alert("Please enter a hour > 0");
  } else {
    const parseHour = parseInt(hour);
    if (isNaN(parseHour)) {
      alert("Please enter a valid hour");
    } else {
      const result = parseHour * 60 * 60;
      alert(`В ${parseHour} часах ${result} cекунд `);
    }
  }
}
