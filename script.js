//var weekday = require('dayjs/plugin/weekday');
//dayjs.extend(weekday);

//var todaysDate = dayjs().format("MM/DD/YYYY hh:mm:ss");
//dayjs().format("dddd");

var currentDayOfWeek = dayjs().format("dddd");

var todaysDate = dayjs().format("dddd, MMMM D YYYY");
$("#currentDay").text(todaysDate);

var currentTime = dayjs().format("HH");
console.log(currentTime);



function addPlannerClasses() {
    // 9 am
    if (currentTime < 09) {
        $("#9am").addClass("future");
    }

    else if (currentTime == 09) {
        $("#9am").addClass("present");
    }

    else {
        $("#9am").addClass("past");
    }
// 10 am
    if (currentTime < 10) {
        $("#10am").addClass("future");
    }

    else if (currentTime == 10) {
        $("#10am").addClass("present");
    }

    else {
        $("#10am").addClass("past");
    }
// 11 am
    if (currentTime < 11) {
        $("#11am").addClass("future");
    }

    else if (currentTime == 11) {
        $("#11am").addClass("present");
    }

    else {
        $("#11am").addClass("past");
    }
// 12 pm
    if (currentTime < 12) {
        $("#12pm").addClass("future");
    }

    else if (currentTime == 12) {
        $("#12pm").addClass("present");
    }

    else {
        $("#12pm").addClass("past");
    }
// 1 pm
    if (currentTime < 13) {
        $("#1pm").addClass("future");
    }

    else if (currentTime == 13) {
        $("#1pm").addClass("present");
    }

    else {
        $("#1pm").addClass("past");
    }
// 2 pm
    if (currentTime < 14) {
        $("#2pm").addClass("future");
    }

    else if (currentTime == 14) {
        $("#2pm").addClass("present");
    }

    else {
        $("#2pm").addClass("past");
    }
// 3 pm
    if (currentTime < 15) {
        $("#3pm").addClass("future");
    }

    else if (currentTime == 15) {
        $("#3pm").addClass("present");
    }

    else {
        $("#3pm").addClass("past");
    }
// 4 pm
    if (currentTime < 16) {
        $("#4pm").addClass("future");
    }

    else if (currentTime == 16) {
        $("#4pm").addClass("present");
    }

    else {
        $("#4pm").addClass("past");
    }

// 5 pm
    if (currentTime < 17) {
        $("#5pm").addClass("future");
    } 

    else if (currentTime == 17) {
        $("#5pm").addClass("present");
    }

    else {
        $("#5pm").addClass("past");
    } 
}
addPlannerClasses();

var nineAMInput = $("#9am");
var tenAMInput = $("#10am");
var elevenAMInput = $("#11am");
var twelvePMInput = $("#12pm");
var onePMInput = $("#1pm");
var twoPMInput = $("#2pm");
var threePMInput = $("#3pm");
var fourPMInput = $("#4pm");
var fivePMInput = $("#5pm");

function savePlanner() {
    // Save related form data as an object
    var savedPlanner = {
        nineAMInput: nineAMInput.val(),
        tenAMInput: tenAMInput.val(),
        elevenAMInput: elevenAMInput.val(),
        twelvePMInput: twelvePMInput.val(),
        onePMInput: onePMInput.val(),
        twoPMInput: twoPMInput.val(),
        threePMInput: threePMInput.val(),
        fourPMInput: fourPMInput.val(),
        fivePMInput: fivePMInput.val()
    };
    // Use .setItem() to store object in storage and JSON.stringify to convert it as a string
    localStorage.setItem("savedPlanner", JSON.stringify(savedPlanner));
    console.log(savedPlanner);
  };

function getPlanner() {
// Use JSON.parse() to convert text to JavaScript object
    var grabSavePlanner = JSON.parse(localStorage.getItem("savedPlanner"));
    nineAMInput.text(grabSavePlanner.nineAMInput);
    tenAMInput.text(grabSavePlanner.tenAMInput);
    elevenAMInput.text(grabSavePlanner.elevenAMInput);
    twelvePMInput.text(grabSavePlanner.twelvePMInput);
    onePMInput.text(grabSavePlanner.onePMInput);
    twoPMInput.text(grabSavePlanner.twoPMInput);
    threePMInput.text(grabSavePlanner.threePMInput);
    fourPMInput.text(grabSavePlanner.fourPMInput);
    fivePMInput.text(grabSavePlanner.fivePMInput);

    console.log(grabSavePlanner);
}

$(".saveBtn").click(function(event) {
    event.preventDefault();
    savePlanner();
    getPlanner();
    var test = $("textarea").val();
    console.log(test);
    });


    function init() {
        // When the init function is executed, the code inside renderLastGrade function will also execute
        getPlanner();
      }
      init();
   






