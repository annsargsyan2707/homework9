const getAge = (date1, date2) =>
  Math.abs(date1.getFullYear() - date2.getFullYear());
const date1 = new Date(2008, 11, 24);
const date2 = new Date();
console.log(getAge(date1, date2));
