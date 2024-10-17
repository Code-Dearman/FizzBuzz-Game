document.addEventListener("DOMContentLoaded", function() {

    document.querySelector(".calcOutput").focus();

    let buttons = document.getElementsByClassName("calcButton");


    /**Adds  */
    for (let button of buttons) {

        console.log(button.value);

        button.addEventListener("click", function(event) {
            addToInput(event.target.value);

            
        }); 
    }

    

})

const addToInput = (targetValue) => {
    const inputArea =  document.getElementById("inputArea");

    inputArea.value += targetValue;

}