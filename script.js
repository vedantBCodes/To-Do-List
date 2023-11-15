const addTask = document.getElementById("tasks");
const inputTask = document.getElementById("add");

function display() {
  if (inputTask.value === "") 
  {
    alert("Please enter a task first");
  } 
  else 
  {
    const task = document.createElement("div");
    const text=`<div class="taskStyle" onclick="flip();">
    ${inputTask.value}
     </div>
     <img src="cutLogo.png" alt=""class="crossLogo"  >`;
    task.innerHTML = text;
    task.style.fontSize="25px";
    task.firstElementChild.id="cont";
    addTask.appendChild(task);
    inputTask.value = "";
  }
}

function flip()
{
  let div2=document.querySelector("#cont");
  div2.classList.toggle("flipImage");
}
