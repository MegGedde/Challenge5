$("#currentDay").text(moment().format('dddd, MMMM Do'));

//Change textarea background color based on time
var checkTime = function () {
    //Get Current time
    var currentTime = moment().format('H');
    //get all elements with class "textarea"
    var timeBlockElements = $(".textarea");

    //loop through taskarea classes
    for (var i = 0 ; i < timeBlockElements.length ; i++) {
        var elementID = timeBlockElements[i].id;
        var manipID = document.getElementById(timeBlockElements[i].id)

        //remove any old classes from element
        $(timeBlockElements[i].id).removeClass(".present .past .future");

        // apply new class if task is present/past/future
        if (elementID < currentTime) {
            $(manipID).addClass("past");
        } else if (elementID > currentTime) {
            $(manipID).addClass("future");
        } else {
            $(manipID).addClass("present");
        }
    }
}

// checkTime every 15 minutes
setInterval(checkTime(), (1000 * 60) * 15);

checkTime()

// $(".m-1").on("click", "p", function() {
//     var text = $(this)
//         .text()
//         .trim();
//     var textInput = $("<textarea>")
//         .addClass("m-1")
//         .val(text);
//     $(this).replaceWith(textInput);
//     textInput.trigger("focus")
//     console.log(text);
// })

// var saveTasks = function() {
//     localStorage.setItem("tasks", JSON.stringify(tasks));
//   };

//   var loadTasks = function() {
//     tasks = JSON.parse(localStorage.getItem("tasks"));
  
//     // if nothing in localStorage, create a new object to track all task status arrays
//     if (!tasks) {
//       tasks = {
//         toDo: [],
//         inProgress: [],
//         inReview: [],
//         done: []
//       };
//     }

// var times = {};

// var timeStart = 8am
// timeStart++

// for (var i = 8; i < 6; i++) {
  
//     }
// }