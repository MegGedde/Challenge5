tasks = [];

$("#currentDay").text(moment().format('dddd, MMMM Do'));

//load from local storage
var loadTasks = function() {
    tasks = JSON.parse(localStorage.getItem("tasks"))
    if(!tasks) {
        tasks={};
    };
    printTasks(tasks)
}

var printTasks = function(){
    $.each(tasks, function(list, arr){

        var taskP = $("<p>").addClass("description task-item-" + list).text(arr)
        
        // console.log(list)
        // console.log(taskP);

        $("#task-item-" + list).replaceWith(taskP);
    })
}


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


//Task update with click
$(".textarea").on("blur", "textarea", function(){
    var text =$(this)
      .text()
      .trim();
    var textInput =$("<textarea>")
      .val(text);
  
    $(this).replaceWith(textInput);
     textInput.trigger("focus");
  });

//   //Task needs to be updated
//   $(".textarea").on("blur", "textarea", function() {
//     //get the textareas; current value/text
//       var text = $(this)
//         .val()
//         .trim();
//       // console.log(text)
  
//       //recreate p element
//       var taskP = $("<p>")
//         .addClass("taskItem")
//         .text(text);
  
//       // replace textarea with p element
//       $(this).replaceWith(taskP);
//     }); 

// save to local storage
$('.saveBtn').on('click', function() {
    var index = $("saveBtn").index(this);
    tasks[index] = $(this).parent().find(".tastInput").text();
    window.localStorage.setItem("tasks", JSON.stringify(tasks));
    console.log(tasks)
})

