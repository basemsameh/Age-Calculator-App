let numYears = document.querySelector('span');
let numMonths = document.querySelectorAll('span')[1];
let numDays = document.querySelectorAll('span')[2];
let day = document.querySelector('#day');
let month = document.querySelector('#month');
let year = document.querySelector('#year');

document.forms[0].onsubmit = (e) => {
  e.preventDefault();

  let dateNow = new Date();
  let birthday = new Date(`${year.value}/${month.value}/${day.value}`);
  let timeDiff = dateNow - birthday;
  // Validation of day
  if (day.value === '') { inValidEmpty(day, 0) }
  else if (day.value > 31 || day.value < 1) { inValidNum(day, 0) }
  else valid(day, 0);
  // Validation of month
  if (month.value === '') { inValidEmpty(month, 1) }
  else if (month.value > 12 || month.value < 1) { inValidNum(month, 1) }
  else valid(month, 1);
  // Validation of year
  if (year.value === '') { inValidEmpty(year, 2) }
  else if (year.value > dateNow.getFullYear()) { inValidNum(year, 2) }
  else valid(year, 2);

  Array.from(document.querySelectorAll('section')).forEach(e => {
    if (e.className !== 'wrong') {
      dateNow.setTime(timeDiff);
      numYears.textContent = dateNow.getFullYear() - 1970; // Years
      numMonths.textContent = dateNow.getMonth(); // Months
      numDays.textContent = dateNow.getDate() - 1; // Days
    }
    else {
      numYears.textContent = '--'; // Years
      numMonths.textContent = '--'; // Months
      numDays.textContent = '--'; // Days
    }
  })
}

function inValidNum(test, i) {
  test.parentElement.className = 'wrong';
  document.querySelectorAll('p')[i].style.display = 'block';
  if (test.name === 'year') {
    document.querySelectorAll('p')[i].textContent = `Must be in the past`;
  }
  else {
    document.querySelectorAll('p')[i].textContent = `Must be a valid ${test.name}`;
  }
}

function inValidEmpty(test, i) {
  test.parentElement.className = 'wrong';
  document.querySelectorAll('p')[i].style.display = 'block';
  document.querySelectorAll('p')[i].textContent = 'This field is required';
}

function valid(test, i) {
  test.parentElement.className = '';
  document.querySelectorAll('p')[i].style.display = 'none';
}