const isLeapYear = (year) => {
  if (year % 400 === 0) return true;
  if (year % 4 === 0) return true;
  return false;
};
const getNumberOfLeapYears = (begin, end) => {
  let count = 0;
  if (end < begin) {
    let help;
    help = end;
    end = begin;
    begin = help;
  }
  for (let i = begin; i <= end; i++) {
    if (isLeapYear(i)) {
      count++;
    }
  }
  return count;
};

const getNumberOfDays = (input1, input2) => {
  let different =
    (Math.abs(input2 - input1) + 1 - getNumberOfLeapYears(input1, input2)) *
    365;
  let leapYearDays = getNumberOfLeapYears(input1, input2) * 366;
  let fullDays = leapYearDays + different;
  return fullDays;
};
console.log(getNumberOfDays(2000, 2004));
