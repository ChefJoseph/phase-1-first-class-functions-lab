// Code your solution in this file!
// Array.drivers = ['Antonia', 'Nuru', 'Amari', 'Mo']
const returnFirstTwoDrivers = (drivers) => {
   return drivers.slice(0,2)
}

const returnLastTwoDrivers = (drivers) => {
    return drivers.slice(2,4)
}

const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers]


const createFareMultiplier = (multiplyRate) => {
    return function (fare) {
        return multiplyRate*fare
    }
}

const fareDoubler = createFareMultiplier(2)
const fareTripler = createFareMultiplier(3)

const selectDifferentDrivers = function (drivers, selectingDrivers) {
    return selectingDrivers(drivers);
  };