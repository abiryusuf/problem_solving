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