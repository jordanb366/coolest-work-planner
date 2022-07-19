

var currentDayOfWeek = dayjs().format("dddd");

// Gets the current date
var todaysDate = dayjs().format("dddd, MMMM D YYYY");
$("#currentDay").text(todaysDate);


// Declared variable for day js hour is in 24 hour time format
var currentTime = dayjs().hour();
console.log(currentTime);

// Adds classes to the description text area
$(".description").each(function(){
     var textAreaTime = $(this).attr("id");
     console.log(textAreaTime);
     if (currentTime > textAreaTime) {
        $(this).addClass("past");
     } else if (currentTime < textAreaTime) {
        $(this).addClass("future");
     } else {
        $(this).addClass("present");
     }
});

// Delcared variables for the save planner to local storage
var nineAMInput = $("#9");
var tenAMInput = $("#10");
var elevenAMInput = $("#11");
var twelvePMInput = $("#12");
var onePMInput = $("#13");
var twoPMInput = $("#14");
var threePMInput = $("#15");
var fourPMInput = $("#16");
var fivePMInput = $("#17");

// Save planner to local storage
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
    
  };

// Get planner from local storage
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
}

// Save button call the functions
$(".saveBtn").click(function(event) {
    event.preventDefault();
    savePlanner();

    });


    function init() {
        // When the init function is executed, the code inside getPlanner function will also execute
        getPlanner();
      }
      init();
