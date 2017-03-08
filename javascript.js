/*jslint browser: true*/
/*global $, jQuery*/
/*jslint devel: true */


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

    