function inchToFeet(feet){
    var mileToFeet = 5280;
    let mile = (feet/mileToFeet);
    if(feet < 0){
        return "Value can not be negative";
    }
    return mile;
}
let result = inchToFeet(5280);
console.log(result);

function woodCalculator(chair, table, bed){``
    let chairWood = chair * 1;
    let tableWood = table * 3;
    let bedWood = bed * 5;

    if(chair <= 0 || table <= 0 || bed <= 0){
        return "Quantity can not be negative";
    }

    let totalWood = chairWood + tableWood + bedWood;
    return totalWood;
}
let result1 = woodCalculator(3,5,6)
console.log(result1);