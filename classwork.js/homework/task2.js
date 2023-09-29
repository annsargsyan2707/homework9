const formateDate = (date) => {
  let options = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return date.toLocaleDateString("en-us", options);
};
const d = new Date();
console.log(formateDate(d));
