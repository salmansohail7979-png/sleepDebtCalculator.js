// Task 1 & 2
const getSleepHours = day => {
  switch (day.toLowerCase()) {
    case 'monday':
      return 8;
    case 'tuesday':
      return 7;
    case 'wednesday':
      return 6;
    case 'thursday':
      return 8;
    case 'friday':
      return 7;
    case 'saturday':
      return 9;
    case 'sunday':
      return 8;
    default:
      return 'Invalid day';
  }
};

// Task 3 (tests - can be removed later)
console.log(getSleepHours('monday'));
console.log(getSleepHours('friday'));
console.log(getSleepHours('sunday'));

// Task 4 & 5
const getActualSleepHours = () =>
  getSleepHours('monday') +
  getSleepHours('tuesday') +
  getSleepHours('wednesday') +
  getSleepHours('thursday') +
  getSleepHours('friday') +
  getSleepHours('saturday') +
  getSleepHours('sunday');

// Task 6
const getIdealSleepHours = () => {
  const idealHours = 8;
  return idealHours * 7;
};

// Task 7 (tests - can be removed later)
console.log(getActualSleepHours());
console.log(getIdealSleepHours());

// Task 8, 9 & 10
const calculateSleepDebt = () => {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours();

  if (actualSleepHours === idealSleepHours) {
    console.log(
      `You got the perfect amount of sleep (${actualSleepHours} hours).`
    );
  } else if (actualSleepHours > idealSleepHours) {
    console.log(
      `You got ${
        actualSleepHours - idealSleepHours
      } hour(s) more sleep than needed.`
    );
  } else {
    console.log(
      `You should get some rest. You are ${
        idealSleepHours - actualSleepHours
      } hour(s) short of your ideal sleep.`
    );
  }
};

// Task 11
calculateSleepDebt();

// Alternative getActualSleepHours()
const getActualSleepHours = () => {
  return 8 + 7 + 6 + 8 + 7 + 9 + 8;
};

// Improved getIdealSleepHours()
const getIdealSleepHours = idealHours => {
  return idealHours * 7;
};

// Updated calculateSleepDebt()
const calculateSleepDebt = () => {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours(8);

  if (actualSleepHours === idealSleepHours) {
    console.log('You got the perfect amount of sleep!');
  } else if (actualSleepHours > idealSleepHours) {
    console.log(
      `You got ${actualSleepHours - idealSleepHours} hour(s) more sleep than needed.`
    );
  } else {
    console.log(
      `You should get some rest. You need ${
        idealSleepHours - actualSleepHours
      } more hour(s) of sleep.`
    );
  }
};

calculateSleepDebt();