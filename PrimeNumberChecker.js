//import readline module to read user input
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  //function to check if number is prime
  function isPrime(n) {
    if (n < 2) return false;

    //checks divisibility up to square root of n
    for (let i = 2; i <= Math.sqrt(n); i++) {
      if (n % i === 0) return false; //if divisible, then it is not prime
    }
    return true; //if not divisible, it is prime
  }
  
  //ask user for beginning of range
  readline.question("Enter the start of the range: ", function(startInput) {
    //ask user for end of range
    readline.question("Enter the end of the range: ", function(endInput) {
      let start = parseInt(startInput); //converts start input to integer
      let end = parseInt(endInput); //converts end input to integer
  
      //validate input - must be positive integers and the start must be less than or equal to the end
      if (isNaN(start) || isNaN(end) || start <= 0 || end <= 0 || start > end) {
        console.log("Invalid input. Please enter positive integers and make sure start ≤ end.");
        readline.close();
        return;
      }
  
      let primes = []; //creates an array to hold prime numbers

      //loop through the range and check for primes
      for (let i = start; i <= end; i++) {
        if (isPrime(i)) {
          primes.push(i); //add prime to the array
        }
      }
  
      //display the result
      console.log(`\nPrime numbers between ${start} and ${end}:\n`);
      console.log(primes.join(", ") || "None found");
  
      readline.close(); //close the interface
    });
  });
  