// Code your solution in this file!
const returnFirstTwoDrivers = function(array) {
    return Array(array[0],array[1]);
};

const returnLastTwoDrivers = function(array) {
    return Array(array[array.length - 2],array[array.length - 1]);
};

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(num) {
    return (function(fare) { 
        return fare*num;
    })
};

const fare = createFareMultiplier()
function fareDoubler(fare) {
    return fare*2;
};

const fare2 = createFareMultiplier();
function fareTripler(fare2) {
    console.log(fare2);
    return fare2*3;
};

function selectDifferentDrivers(array, returnFirstTwoDrivers) {
    return returnFirstTwoDrivers(array);
}