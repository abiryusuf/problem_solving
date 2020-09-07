function inchToFeet(feet){
    var mileToFeet = 5280;
    let mile = (feet/mileToFeet);
    if(feet < 0){
        return "Value can not be negative";
    }
    return mile;
}
let result = inchToFeet(5280);
console.log(`One mile ${result} feet` );

//wood calculator
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
console.log("total wood", result1);

//brick calculator
function brickCalculator(floor){
  let brick = 0;
  let concrete = 1000; // per feet = concrete concrete
  if(floor <= 0){
      return "Value can not be negative";
  }
  else if(floor <= 10){
      // 15 feet high from 1 floor to 10th floor 
      brick = floor * 15 * concrete;
  }
  else if (floor <= 20){
      let firstStep = 10 * 15 * concrete;
      floor = floor - 10;
      //12 feet high from 11 to 20th floor
      brick = firstStep + floor * 12 * concrete;
  }
  else {
    let firstStep = 10 * 15 * concrete;
    let secondStep = 10 * 12 * concrete;
    floor = floor - 20;
    //10 feet high from 20th floor to up
    brick = firstStep + secondStep + floor * 10 * concrete;
  }
  return brick;
}
const totalBrick = brickCalculator(21);
console.log("Total brick", totalBrick);

//tiny friends
function tinyFriend(friends){
    if(friends.length === 0){
        return "Array can not be null";
    }
    else {
        let tiny = friends[0];
        for (let i = 0; i < friends.length; i++) {
            const element = friends[i];
            if(element.length < tiny.length){
                tiny = element;
            }
            
        }
        return `Your tiny friend is ${tiny}`;
    }
    
}
let friendList = ["Abir", "Yusuf", "Mim"]
let friend = tinyFriend(friendList);
console.log("Tiny Friend", friend);