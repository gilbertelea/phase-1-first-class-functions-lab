
function returnFirstTwoDrivers(FirstTwoDrivers){
    return FirstTwoDrivers = ['Antonia', 'Nuru'];  
}
   
function returnLastTwoDrivers(LastTwoDrivers){
    return LastTwoDrivers = ['Amari', 'Mo']
}

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

//selectingDrivers[0](drivers) = ['Antonia', 'Nuru'];
//electingDrivers[1](drivers) = ['Amari', 'Mo'];

const  createFareMultiplier = function(fareMultiplier) {
    return function(value) {
       return fareMultiplier*value;
    }
}
const fareDoubler = function(createFareMuliplier) {
    return createFareMuliplier*2 ;
}
const fareTripler = function(createFareMuliplier){
    return createFareMuliplier*3;
}

function selectDifferentDrivers(arrayOfdrivers, returnFirstTwoDrivers){
    return returnFirstTwoDrivers() ;

}
