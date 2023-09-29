const countDown = (date1, date2) => {
  let secs = Math.floor(date2 - date1) / 1000;
  let minutes = Math.floor(secs / 60);
  let hours = Math.floor(minutes / 60);
  let days = Math.floor(hours / 24);
  let res = `${days} 'days', ${hours}  'houre', ${minutes}  'minutes', ${secs}  'seconds'`;
  return res;
};
console.log(
  countDown(new Date(), new Date(new Date().getFullYear() + 1, 0, 1))
);
