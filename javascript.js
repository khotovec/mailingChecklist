/*jslint browser: true*/
/*global $, jQuery*/
/*jslint devel: true */


var markup = (0.50),
    hourlyRate = (18.95),
    iPM = (15),
    minimumCharge = (110.11);



function mathTest() {
    "use strict";
    var quantity = document.getElementById("quantity").value,
        //Press Time required
        pressTime = ((quantity / iPM) / 60),
        //How much the press costs to run for the above time
        pressLaborCost = (pressTime * hourlyRate),
        //Press time times the Markup
        pressMarkup = (markup * pressLaborCost),
        //Cost to customer of Press + Operator Time
        pressCost = (pressLaborCost + pressMarkup);
    alert(pressCost);
}


/*
function firstMath() {
    "use strict";
    var quantity = document.getElementById("quantity").value,
        titleOutput = document.getElementById("titleOutput"),
        output = document.getElementById("output"),
        colorRuns = document.getElementById("numberOfColors").value,
        markup = (0.25),
        costPerPrint = (0.17),
        costPerQuantity = (quantity * costPerPrint),
        colorRunCost = (colorRuns * 35),
        colorAndQuantity = (costPerQuantity + colorRunCost),
        finalCost = (colorAndQuantity + (markup * colorAndQuantity));
    if (quantity > -1) {
        titleOutput.innerHTML = ("This is your Cost");
        output.innerHTML = (finalCost);
    }
}
*/