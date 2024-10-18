document.addEventListener("DOMContentLoaded", function() {

    document.querySelector(".calcOutput").focus();

    let buttons = document.getElementsByClassName("calcButton");
    /**Adds and event listener to each calcButton and passes its value into the addToInput function.*/
    for (let button of buttons) {
        
        button.addEventListener("click", function(event) {
            /**On clicking the specified buttons, runs the function addToInput and passes
             * a paramater which is the value (as specified in calculator.html) of the button.
             */
            addToInput(event.target.value);
        }); 
    }

    /**Adds and event listener to calcButtonClear to run the clearInput function on click*/
    document.querySelector(".calcButtonClear").addEventListener("click", clearInput);

    /**Adds and event listener to calcButtonDelete to run the deleteOne function on click*/
    document.querySelector(".calcButtonDelete").addEventListener("click", deleteOne);

    /**Adds "click" event listener to the equals button which runs the calculateInput function*/
    document.querySelector(".calcButtonEquals").addEventListener("click", calculateInput);

})


/**Takes the value from the clicked button and inserts it into the input area.*/
const addToInput = (targetValue) => {
    const inputArea =  document.getElementById("inputArea");

    inputArea.value += targetValue;
    console.log(inputArea.value);

}

/**Clears the input area. */
const clearInput = () => document.getElementById("inputArea").value = "";

/**Deletes the last character from the input area*/
const deleteOne = () => {
    let inputArea = document.getElementById("inputArea").value;

    document.getElementById("inputArea").value = inputArea.slice(0, -1);
}


/**uses the eval() method to calculate the result of a string */
const calculateInput = () => {
    const inputArea = document.getElementById("inputArea");

    inputArea.value =  eval(inputArea.value);
}


