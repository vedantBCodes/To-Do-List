const addTask = document.getElementById("tasks");
const inputTask = document.getElementById("add");

function display() {
  if (inputTask.value === "") 
  {
    alert("Please enter a task first");
  } 
  else 
  {
    const li = document.createElement("li");
    li.innerHTML = inputTask.value;
    addTask.appendChild(li);
    let span1=document.createElement("span");
    span1.innerHTML="\u00d7";
    li.appendChild(span1);
    
  }
  inputTask.value = "";
}

addTask.addEventListener("click",function(e){
  if(e.target.tagName==="LI")
  {
    e.target.classList.toggle("checked");

  }
  else if(e.target.tagName==="SPAN")
  {
    e.target.parentElement.remove();
  }
},false);

