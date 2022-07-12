// pushes each prime number to this array container;
let primeArr = [];
// calculates the sum of each prime number
let eachSum = 0;

// a function that returns the sum of the most consecutive primes below one-million
// might as well pass in one-million as an argument
function getConsecutivePrimeSum(n) {
    getPrime(n);
    let consPrimeSum = getPrimeSum(primeArr.length);   
    console.log(consPrimeSum);
}


function getPrime(n) {
    // a for loop that iterates through the given parameter
// starts its iteration from 2;
for (let i = 2; i <= n; i++) {
    // boolean to set if numbers are a prime number or not;
    let isprime = true;
    // a for loop to divde i by j where j is all the values less than i starting iteration from 2, 
    // hence if any of the division gives a remainder of 0, then it is not a prime number 
    // if at any point i is divided by numbers (j)less than it and none gives a remainder of 0,
    // then it is a prime number
        for (let j = 2; j < i; j++) {
            if (i%j == 0) {
                isprime = false;
                break;
            }
        }
        // if number is true, push the prime number to primeArr array container;
        if (isprime) {
            primeArr.push(i)
            // console.log(i);
        }        
}
}

function getPrimeSum(n) {
    let totalSum = 0;
     // a for loop to iterate through the primeArr container
    // and logs the sum of the prime numbers
    for (let i = 0; i < n; i++) {
        // returns the sum od each prime numbers
        const sum = getSum(i);
        // if the sum of the prime number isless than one-million, return/log the sum;
        if (sum < 1000000) {
            totalSum = sum;
            // console.log(totalSum);
        }
        
    }
    return totalSum;
}



// an helper function to return the sum of the prime;
// given an index to be used in the primeArr container;
function getSum(n) {
   return eachSum += primeArr[n]
}




// calling the function
getConsecutivePrimeSum(100000);

