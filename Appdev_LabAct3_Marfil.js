let base_number = 0; // the last digit of my student number is 0



//PROBLEM 1 Calculate Grade
let score = base_number * 10 + 5;
function calculateGrade(score){

        if(score >= 90){ //If 90 or above, return A
            return 'A';
        } else if(score >= 80){//If 80 or above, return B
            return 'B';
        } else if(score>=70){//If 70 or above, return C
            return 'C';
        } else if(score>=60){//If 60 or above, return D
            return 'D';
        }   else{          //If below 60, return F
            return 'F';
        }
}
        console.log("PROBLEM 1: Calculate Grade\n"); //
        console.log("Your grade is: " + calculateGrade(score) ); // the last digit of my student number is 0, so it should print "Your grade is: F"



//PROBLEM 2 Show Stars
let rows = base_number + 2; // the last digit of my student number is 0
function showStars(rows){
    
    for(let j=1; j<=rows; j++){ //variable rows mean the number of rows to be printed by the function, the outer loop stops when the number of row is equal to rows
        let pattern = "";   //resets the counter for how many stars to be printed per row
        for(let i=0; i<j; i++){ //inner loop the prints the stars, it stops when the number of starts is equal to the current number of rows or the variable j
            pattern += "*";//prints the stars
        }
        console.log(pattern); //prints the pattern of stars after the inner loop is done
    }
}
        console.log("\nPROBLEM 2: Show Stars");
        showStars(rows); // the last digit of my student number is 0, so it should print 2 rows






//PROBLEM 3 Prime Number checker
let n = base_number + 10; 
function isPrime(n){

    if(n<=1) 
        return false;
    for(let i=2; i<n; i++){
        if(n%i==0){
            return false; //found a divisor
        }
    }
    return true; //no divisor 
}
        console.log("PROBLEM 3: Prime Number Checker: \n");
        console.log("is "+ n + " a prime number? " + isPrime(n));





// Problem 4: Multiplication Table 
let num = base_number;
function multiplicationTable(num){

        for(let i=1; i<=10; i++){ //iterates i until 10
            console.log(num + "x" + i +"=" + (num*i)); //multiplies num by i and prints the result

        }
        
}
    console.log("\nPROBLEM 4: Multiplication Table");
    multiplicationTable(num);









