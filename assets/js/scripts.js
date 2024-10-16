document.addEventListener("DOMContentLoaded", function() {

    document.getElementById("userValue").focus();

    document.getElementById("userValue").addEventListener("keydown", function(event) {
        if (event.key === "Enter"){
            updateOutput();
        }
    })

})

let gameCounter = 0;                                                                            /*Creates a varioable which will count the number of times that the fizzbuzz game has been played.*/

function updateOutput() {                                                                       /*defines the function updateOutput which is called by the GO! button in FizzBuzzgame.html*/
    
    let i;                                                                                      /*Creates the variable i which denotes the integer in the FizzBuzz game*/
    let userInput = document.getElementById("userValue").value;                                 /*Creates the variable of userInput which takes the value from the userInput element in FizzBuzzgame.html*/

    let start = performance.now();                                                              /*Takes a time stamp at the start of the function*/                                                     

    if (userInput > 20000) {                                                                    /*Sets an upper limit of 10,000 so that the user cannot input large numbers and cause performance issues.*/
        document.getElementById("output").textContent += "Error: Please don't break me";        /*Displays an error message if the user does try to input a large number.*/
        return;                                                                                 /*Ends the script early*/
    }                                                
    
    for (i = 1; i <= userInput; i++) {                                                          /*Changes i value to 1 and states, where i is less than or equal to the userInput value, add 1 to i*/
        let output = "";                                                                        /*defines a new variable, output, which is a blank string for now*/
        if (i % 3 === 0) output += "Fizz";                                                      /*if the remainder of i / 3 is exactly equal to 0 add the string "Fizz" to the variable output*/
        if (i % 5 === 0) output += "Buzz";                                                      /*if the remainder of i / 5 is exactly equal to 0 add the string "Buzz" to the variable output*/
        if (output === "") output += i;                                                         /*if neither of the previous rules apply add the current value of i to the output*/

        document.getElementById("output").textContent += output + " ";                          /*Targets the html element with the id of "output" and adds the output variable + a blank space string to the text content*/
        document.getElementById("valueDiv").style.display="none"                                /*Hides the user input box*/
        document.getElementById("goButton").style.display="none"
    }

    gameCounter++;                                                                              /*increments the game counter*/
    let timeDiv = document.querySelector(".time-div");
    let newAnchor = document.querySelector(".newAnchor")
    if (gameCounter >= 3 && !timeDiv.contains(newAnchor)) {
        displayAnchor();
    }

    let timeTaken = performance.now() - start;                                                  /*Takes a times stamp at the end of the function and minuses the original time to find how long the function took to run.*/
    const timeReport = `That function took ${timeTaken} milliseconds to run!`;                  /*Writes a template literal which reports the time taken to run the function and applies it to a constant*/
    document.getElementById("timeReport").innerText = timeReport;                               /*applies the timeReport to the timeStamp paragraph*/
    return gameCounter;
}

function clearOutput() {                                                                        /*Defines function clearOutput which is called by the reset button in FizzBuzzgame.html*/
    document.getElementById("output").textContent = "";                                         /*Targets the textContent of the P element which has the id"output" and changes it to "" or blank*/
    document.getElementById("valueDiv").style.display="block";                                  /*Brings back the user input box*/
    document.getElementById("goButton").style.display="inline-block";                           /*Brings back the goButton*/
    document.getElementById("timeReport").innerText = "";                                       /*Clears the time report paragraph*/  
    document.getElementById("userValue").value = "";                                            /*Clears the userValue input box*/

    document.getElementById("userValue").focus();                                               /*Refocusses the input box on reset so that no clicking in necessary*/
}



const displayAnchor = () => {                                                                   /*defines a function which will display an anchor tag after three tries of the FizzBuzz game*/
    let timeDiv = document.querySelector(".time-div");                                          /*declares a variable which holds the value of the timeDiv in index.html*/
    let newAnchor = document.createElement("a");                                                /*delcares a variable which holds the value of a new anchor tag*/
    
    newAnchor.setAttribute('href', "calculator.html");                                          /*sets attributes for the new anchor tag, namely the href value which points toa  new webapge*/
    newAnchor.innerText = "Bored? Try this";                                                    /**/
    newAnchor.classList.add("newAnchor");

    timeDiv.appendChild(newAnchor);
}


