let distance = 250;
let fuel = 100;
let distanceCondition = distance <= 200 && fuel >= 100;
//let isEngineBroken = true;

let isEngineFunctioning = true;

if(!isEngineFunctioning || distance > 200) { // ! = NOT operator
    console.log('wont make it');
}


//if(isEngineBroken) {
//    console.log('wont make it');
//}





//console.log(distanceCondition);

//if(distance > 200) {
//    console.log('wont make it');
//}

else if(distanceCondition && fuel >= 100) {
   console.log('you will make it')
}

//Challenge - Distance < 100 need at least 25 fuel

else if(distance < 100 && fuel >= 25) {
    console.log('you will make it');
}


