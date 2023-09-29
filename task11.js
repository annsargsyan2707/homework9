const formatDate = (date) => {
  let longMonth = date.toLocaleString("en-us", { month: "long" });

  return date.getDate() + " " + longMonth + " " + date.getFullYear();
};
console.log(formatDate(new Date("2020, 05, 14")));
