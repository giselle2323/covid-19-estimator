// Challenge 1
const userData = {
  data: {
    region: {
      name: 'Afrtica',
      avgAge: 19.7,
      avgDailyIncomeInUSD: 4,
      avgDailyIncomePopulation: 0.73
    },
    periodType: 'days',
    timeToElapse: 38,
    reportedCases: 2747,
    population: 92931687,
    totalHospitalBeds: 678874
  }
};

export const currentlyInfectedForImpact = (param) => {
  try {
    const { data: { reportedCases } } = param;
    const currentlyInfected = reportedCases * 10;
    return currentlyInfected;
  } catch (error) {
    return error.message;
  }
};

export const currentlyInfectedForSevereImpact = (param) => {
  try {
    const { data: { reportedCases } } = param;
    const currentlyInfected = reportedCases * 50;
    return currentlyInfected;
  } catch (error) {
    return error.message;
  }
};


export const convertToDays = (param) => {
  let days;
  const { data: { timeToElapse }, data: { periodType } } = param;
  const setPeriodTypeToLowerCase = periodType.toLowerCase();
  switch (setPeriodTypeToLowerCase) {
    case 'days':
      days = timeToElapse;
      break;
    case 'weeks':
      days = timeToElapse * 7;
      break;
    case 'months':
      days = timeToElapse * 30;
      break;
    default:
      days = timeToElapse;
  }
  return days;
};


export const infectionsByTimeForImpact = () => {
  try {
    const factor = Math.trunc(convertToDays(userData) / 3);
    const infectionByRequestedTime = Math.trunc(currentlyInfectedForImpact(userData)
      * (2 ** factor));
    return infectionByRequestedTime;
  } catch (error) {
    return error.message;
  }
};

export const infectionsByTimeForSevereImpact = () => {
  try {
    const factor = Math.trunc(convertToDays(userData) / 3);
    const infectionByRequestedTime = Math.trunc(currentlyInfectedForSevereImpact(userData)
      * (2 ** factor));
    return infectionByRequestedTime;
  } catch (error) {
    return error.message;
  }
};
