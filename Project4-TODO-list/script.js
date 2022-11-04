var taskInput=document.getElementById("new-task");//Add a new task.
var addButton=document.getElementById("add-task");//Button to ass a new task.
var incompleteTaskHolder=document.getElementById("incomplete-tasks");//ul of #incomplete-tasks
var completedTasksHolder=document.getElementById("completed-tasks");//ul of completed-tasks

//***Creating task item***
var createNewTaskElement=function(taskString){
  var listItem=document.createElement("li");//container for the task elements
  var checkBox=document.createElement("input");//input (checkbox)
  var label=document.createElement("label");//label
  var editInput=document.createElement("input");//input (text)
  var editButton=document.createElement("button");//edit button
  var deleteButton=document.createElement("button");//delete button
  var deleteButtonImg=document.createElement("img");//delete button image
  //setting elements
  label.innerText=taskString;
  label.className="task";
  checkBox.type="checkbox";
  editInput.type="text";
  editInput.className="task";
  editButton.innerText="Edit";
  editButton.className="edit";
  deleteButton.className="delete";
  deleteButtonImg.src="images/remove.svg";
  deleteButton.appendChild(deleteButtonImg);
  //appending elements
  listItem.appendChild(checkBox);
  listItem.appendChild(label);
  listItem.appendChild(editInput);
  listItem.appendChild(editButton);
  listItem.appendChild(deleteButton);
  return listItem;
}

//***Adding task***
//Set the click handler to the addTask function.
addButton.addEventListener("click",addTask);

//Set the enter handler to the addTask function.
taskInput.addEventListener("keypress", addTaskWithEnter);

function addTaskWithEnter() {
  if (event.keyCode === 13 && taskInput.value) {
    console.log("Adding task with enter key!");
    addTask();
  }
};

var addTask = function() {
  console.log("Add Task...");
  if (!taskInput.value) return;//prevent creating an empty task
  var listItem=createNewTaskElement(taskInput.value);
  //Append listItem to incompleteTaskHolder
  incompleteTaskHolder.appendChild(listItem);
  bindTaskEvents(listItem, taskCompleted);
  taskInput.value="";
}

//***Editing task***
var editTask=function(){
  console.log("Edit Task...");
  var listItem=this.parentNode;
  var editInput=listItem.querySelector('input[type=text]');
  var label=listItem.querySelector("label");
  var editBtn=listItem.querySelector(".edit");
  var containsClass=listItem.classList.contains("edit-mode");
  //If class of the parent is .edit-mode
  if(containsClass && !editInput.value){
    if (confirm("Your task is empty. Do you want to delete this task?") == true) {
    var listItem=this.parentNode;
    var ul=listItem.parentNode;
    //Remove the parent list item from the ul.
    ul.removeChild(listItem);
    }else{
    editBtn.innerText="Edit";}
  }else if(containsClass){
    //switch to .edit-mode
    //label becomes the inputs value.
    label.innerText=editInput.value;
    editBtn.innerText="Edit";
  }else{
    editInput.value=label.innerText;
    editBtn.innerText="Save";
  };
  //toggle .edit-mode on the parent.
  listItem.classList.toggle("edit-mode");
};

//***Deleting task.***
var deleteTask=function(){
  console.log("Delete Task...");
  if (confirm("Do you want to delete this task?") == true) {
    var listItem=this.parentNode;
    var ul=listItem.parentNode;
    //Remove the parent list item from the ul.
    ul.removeChild(listItem);
  }else{
    return;
  }
}

//***Mark task completed***
var taskCompleted=function(){
  console.log("Complete Task...");
  //Append the task list item to the #completed-tasks
  var listItem=this.parentNode;
  completedTasksHolder.appendChild(listItem);
  bindTaskEvents(listItem, taskIncomplete);
}

//***Mark task back incompleted***
var taskIncomplete=function() {
  console.log("Incomplete Task...");
  //Mark task as incomplete.
  //When the checkbox is unchecked
  //Append the task list item to the #incomplete-tasks.
  var listItem=this.parentNode;
  incompleteTaskHolder.appendChild(listItem);
  bindTaskEvents(listItem,taskCompleted);
}

//The glue to hold it all together.
var bindTaskEvents=function(taskListItem,checkBoxEventHandler){
  console.log("loop function");
  //select ListItems children
  var checkBox=taskListItem.querySelector("input[type=checkbox]");
  var editButton=taskListItem.querySelector("button.edit");
  var deleteButton=taskListItem.querySelector("button.delete");
  //Bind editTask to edit button.
  editButton.onclick=editTask;
  //Bind deleteTask to delete button.
  deleteButton.onclick=deleteTask;
  //Bind taskCompleted to checkBoxEventHandler.
  checkBox.onchange=checkBoxEventHandler;
}
//cycle over incompleteTaskHolder ul list items
//for each list item
for (var i=0; i<incompleteTaskHolder.children.length;i++) {
  //bind events to list items chldren(tasksCompleted)
  bindTaskEvents(incompleteTaskHolder.children[i],taskCompleted);
}
//cycle over completedTasksHolder ul list items
for (var i=0; i<completedTasksHolder.children.length;i++) {
  //bind events to list items chldren(tasksIncompleted)
  bindTaskEvents(completedTasksHolder.children[i],taskIncomplete);
}
