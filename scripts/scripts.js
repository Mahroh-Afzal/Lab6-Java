//Mahroh Afzal
/****************** create variables ******************/
/* create variables to hold the values for modelName and duration */
window.onload
let modelName = 'xyz';
let duration = 0;

/****************** helper function ******************/
/* create a function called recalculate() which will
    - create a variable to represent the calculated-cost span element.
    - check the value of the modelName variable, and use that to calculate the new total cost.
    - set the value of the calculated-cost element's innerHTML to this new value
*/



function recalculate() {
    // Check the value of the modelName variable
    let costLabel = document.getElementById("calculated-cost");
    let newTotalCost;
    if (modelName==="XYZ") {
        newTotalCost= (duration) *100;
        
    }
    else {
        newTotalCost= (duration) *213;
    }
costLabel.textContent= newTotalCost;
}

// Model Button Logic 
let switchModelButton = document.getElementById("model-button");

// Change the Model
switchModelButton.onclick= function changeModel() {
    let modelText = document.getElementById("model-text");

    // Change the Value of modelName and Update
    if (modelName === 'XYZ') {
        modelName = 'CPRG';
        modelText.textContent = 'Model CPRG';
    } else {
        modelName = 'XYZ';
        modelText.textContent = 'Model XYZ';
    }

    // Recalculate
    recalculate();
};


//Duration Button Logic
let changeDurationButton = document.getElementById("duration-button");
let durationText = document.getElementById("duration-text");
// Duration Change Function
changeDurationButton.onclick=function changeDuration() {


    // Ask User for New Duration and then Update
    let newDuration = prompt('Enter a new duration:');
        durationText.textContent= newDuration;
        duration= newDuration;

          // Recalculate
    recalculate();
    };
