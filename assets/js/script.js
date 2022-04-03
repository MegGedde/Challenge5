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

//save written tasks
$(".saveBtn").on("click", function () {
    //get nearby values.
    var text = $(this).siblings(".textarea").val();
    var time = $(this).parent().attr("id");

    //set items in local storage.
    localStorage.setItem(time,text);
})

// //load any saved data from LocalStorage
$("#8 .textarea").val(localStorage.getItem("8"));
$("#9 .textarea").val(localStorage.getItem("9"));
$("#010 .textarea").val(localStorage.getItem("010"));
$("#011 .textarea").val(localStorage.getItem("011"));
$("#012 .textarea").val(localStorage.getItem("012"));
$("#013 .textarea").val(localStorage.getItem("013"));
$("#014 .textarea").val(localStorage.getItem("014"));
$("#015 .textarea").val(localStorage.getItem("015"));
$("#016 .textarea").val(localStorage.getItem("016"));
$("#017 .textarea").val(localStorage.getItem("017"));

