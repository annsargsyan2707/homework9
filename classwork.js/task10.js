function getDay(str) {
  let weekday = [
    "sunday",
    "monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let weekdayIndex = new Date(str).getDay();
  return weekday[weekdayIndex];
}
console.log(getDay("12/07/2016"));
