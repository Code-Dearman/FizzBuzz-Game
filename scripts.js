function updateOutput() {                                               /*defines the function updateOutput which is called but the GO! button in FizzBuzzgame.html*/
    
    var i;                                                              /*Creates the variable i which denotes the integer in the FizzBuzz game*/
    var userInput = document.getElementById("userValue").value;         /*Creates the variable of userInput which takes the value from the userInput element in FizzBuzzgame.html*/
                                                                        
    for (i = 1; i <= userInput; i++) {                                  /*Changes i value to 1 and states, where i is less than or equal to the userInput value, add 1 to i*/
        let output = "";                                                /*defines a new variable, output, which is a blank string for now*/
        if (i % 3 === 0) output += "Fizz";                              /*if the remainder of i / 3 is exactly equal to 0 add the string "Fizz" to the variable output*/
        if (i % 5 === 0) output += "Buzz";                              /*if the remainder of i / 5 is exactly equal to 0 add the string "Buzz" to the variable output*/
        if (output === "") output += i;                                 /*if neither of the previous rules apply add the current value of i to the output*/

        document.getElementById("output").textContent += output + " ";    /*Targets the html element with the id of "output" and adds the output variable + a blank space string to the inner html*/
    }

}