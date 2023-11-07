
const addTask=document.getElementById("tasks");
const inputTask=document.getElementById("add");


function display()
{
    if(inputTask.value==="")
    {
        alert("Please enter a task first");
    }
    else
    {
        addTask.innerHTML=inputTask.value
    }
}
