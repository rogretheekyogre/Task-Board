// Retrieve tasks and nextId from localStorage
let taskList = JSON.parse(localStorage.getItem("tasks")) || []
let nextId = localStorage.getItem("nextId") || 0

// Todo: create a function to generate a unique task id
function generateTaskId() {
nextId++
localStorage.setItem("nextId",nextId)
return nextId
}

// Todo: create a function to create a task card
function createTaskCard(task) {
const card=$("<div>").addClass("card task-card my-3").attr("data-id",task.id)
const header=$("<div>").addClass("card-header h4").text(task.title)
const body=$("<div>").addClass("card-body")
const description=$("<p>").addClass("card-text").text (task.description)
const duedate=$("<p>").addClass("card-text").text (task.duedate)
const deletebtn=$("<button>").addClass("btn btn-danger").text ('delete')
deletebtn.on("click",handleDeleteTask)
if(task.duedate&&task.status!=="done"){
    const today=dayjs()
    if(today.isSame(task.duedate,"day")){
        card.addClass("bg-warning text-white")
    } else if(today.isAfter(task.duedate)){
        card.addClass("bg-danger text-white")
    }

}
body.append(description,duedate,deletebtn)
card.append(header,body)
return card
}

// Todo: create a function to render the task list and make cards draggable
function renderTaskList() {

}

// Todo: create a function to handle adding a new task
function handleAddTask(event){
    event.preventDefault()
const task={
    id:generateTaskId(),
    title:$("#taskTitle").val(),
    description:$("#taskDescription").val(),
    duedate:$("#taskDueDate").val(),
    status:"to-do"
}
taskList.push(task)
localStorage.setItem("tasks",JSON.stringify(taskList))
renderTaskList()

}

// Todo: create a function to handle deleting a task
function handleDeleteTask(event){

}


// Todo: create a function to handle dropping a task into a new status lane
function handleDrop(event, ui) {

}

// Todo: when the page loads, render the task list, add event listeners, make lanes droppable, and make the due date field a date picker
$(document).ready(function () {
$("#taskDueDate").datepicker()
renderTaskList()
$("#taskForm").on("submit",handleAddTask)
});
