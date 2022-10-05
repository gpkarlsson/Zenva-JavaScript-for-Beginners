let population = 100;
let years = 0;
//population = population * 1.05;
//population *=1.05;

//my attempt

/*while(years => 0){
    years++;
    population *= 1.05;
    
    if(years < 10) {
        continue;
    }

    if( years == 10) {
        break;
    }
}

console.log(population)
*/

/* solution
let i = 0;
while(i < 10) {
    population *= 1.05;
    i++;
}

console.log(population);
*/

//162.8894626777442

for(let i = 0; i < 10; i++) {
    population *= 1.05;
    console.log(population);
}




