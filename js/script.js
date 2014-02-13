//Guerra, Andre 12/13/14 Expressions - Personal

var month = ["May" , "June", "July" , "August"]; //Summer months are listed

var savedAmount = [0 , 0 , 0 , 0]; //Amount saved default values

var month1 = prompt("Let's find out how much money you saved this summer. How much money did you save in the month of "+ month[0] + "? (enter without $ sign)"); //gather info for May
var month2 = prompt("How much money did you save in the month of "+ month[1] + "? (enter without $ sign)"); //gather info for June
var month3 = prompt("How much money did you save in the month of "+ month[2] + "? (enter without $ sign)"); //gather info for July
var month4 = prompt("How much money did you save in the month of "+ month[3] + "? (enter without $ sign)"); //gather info for August

savedAmount[0] = Number(month1); //User will change default value from month 1
savedAmount[1] = Number(month2); //User will change default value from month 2
savedAmount[2] = Number(month3); //User will change default value from month 3
savedAmount[3] = Number(month4); //User will change default value from month 4

var total = savedAmount[0] + savedAmount[1] + savedAmount[2] + savedAmount[3]; //add up the user input values and convert them into numbers
var monthAverage = total / 4; //divided by the total number of months in the array
var weekAverage = total / 16; //divided by the total number of weeks in the 4 months
var yearSavings = (total /4)*12;

//This alert will tell the user how much they have saved up over the summer and what was their average savings per month and per week.
alert("Congratulations! \nYou save a total of $" + total + " this summer, with an average savings of $" + monthAverage + " saved per month and an average of $" + weekAverage + " saved per week.);