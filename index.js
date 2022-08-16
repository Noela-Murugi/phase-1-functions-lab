// Code your solution in this file!
const ScuberHquarter = 42;
const manhattanBlockFeet = 264;

//distanceFromHqInBlocks function
function distanceFromHqInBlocks(sNum){
     let blocks;
     if(sNum > ScuberHquarter){
        blocks = sNum - ScuberHquarter;
     } else{
        blocks = ScuberHquarter - sNum;
     }
     return blocks;

}

//distanceFromHqInFeet function
function distanceFromHqInFeet(sNum) {
  let blocks = distanceFromHqInBlocks(sNum);
  return blocks * manhattanBlockFeet;

}

//distanceTravelledInFeet function
function distanceTravelledInFeet(start, destination) {
    let travellDistance;
      if (start> destination) {
        travellDistance = (start - destination) * manhattanBlockFeet;
      } else {
        travellDistance = (destination - start) * manhattanBlockFeet;
      }
      return travellDistance;

}

//calculatesFarePrice function
function calculatesFarePrice(start, destination) {
  let travellDistance = distanceTravelledInFeet(start, destination);
  let fare;

  if (travellDistance> 0 && travellDistance <= 400) {
    return 0;
  }

  else if (travellDistance > 400 && travellDistance <= 2000) {
    fare = (travellDistance - 400) * 0.02;
  }

  else if (travellDistance > 2000 && travellDistance <= 2500) {
    fare = 25;
  }

  else {
    return "cannot travel that far"
  }
  return fare;
}
