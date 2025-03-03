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
    span1.innerHTML=`<img src="cutLogo.png" alt="">`;
    li.appendChild(span1);
    
  }
  inputTask.value = "";
  savedata();
}

addTask.addEventListener("click",function(e){
  if(e.target.tagName==="LI")
  {
    e.target.classList.toggle("checked");
    savedata();

  }
  else if(e.target.tagName==="IMG")
  {
   let x= e.target.parentElement;
   x.parentElement.remove();
   savedata();
  }
});

// Saving the data in the local storage  (very important)

function savedata(){
  localStorage.setItem("data1",addTask.innerHTML);
}

function showTask(){
  addTask.innerHTML=localStorage.getItem("data1");
}
showTask();