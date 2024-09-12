function updateOutput() {

    var i;
    var userInput = document.getElementById("userValue").value;

    for (i = 1; i <= userInput; i++) {
        let output = "";
        if (i % 3 === 0) output += "Fizz";
        if (i % 5 === 0) output += "Buzz";
        if (output === "") output += i;

        document.getElementById("output").innerHTML += output + " ";
        console.log(output);
    }

}


