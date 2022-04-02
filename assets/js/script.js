$("#currentDay").text(moment().format('dddd, MMMM Do'));

var saveTasks = function() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  };

  var loadTasks = function() {
    tasks = JSON.parse(localStorage.getItem("tasks"));
  
    // if nothing in localStorage, create a new object to track all task status arrays
    if (!tasks) {
      tasks = {
        toDo: [],
        inProgress: [],
        inReview: [],
        done: []
      };
    }

var times = {};

var timeStart = 8am
timeStart++

for (var i = 8; i < 6; i++) {
  
    }
}