function formater(str) {
  let date = new Date(str);
  let year = date.getFullYear();
  const firstYearDate = new Date(year, 0, 1);
  let ms = date - firstYearDate;
  let day = ms / 86400000 + 1;
  console.log(day);
}
console.log(formater("12/13/2003"));
