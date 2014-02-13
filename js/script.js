//Guerra, Andre 12/13/14 Expressions - Personal

var month = ["May" , "June", "July" , "August"]; //Summer months are listed

var month1 = prompt("Let's find out how much money you saved this summer. How much money did you save in the month of "+ month[0] + "?");
var month2 = prompt("How much money did you save in the month of "+ month[1] + "?");
var month3 = prompt("How much money did you save in the month of "+ month[2] + "?");
var month4 = prompt("How much money did you save in the month of "+ month[3] + "?");

var total = Number(month1) + Number(month2) + Number(month3) + Number(month4);
var monthAverage = total / 4;
var weekAverage = total / 16;

alert("You save a total of $" + total + " this summer with an avergae savings of $" + monthAverage + " saved per month and an average of $" + weekAverage + "saved per week.");


