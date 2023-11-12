
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
        const newTask=document.createElement("div");
        const text=`<div id="ft"><img src="radioUnchecked.png" alt="" width="20px" style="margin-right:20px" onclick="flip();" id="radiauc">${inputTask.value}<img src="cutLogo.png" alt="" width="20px" style="margin-left:20px"  onclick="remove();" ></div>`;
        newTask.innerHTML=text;
        tasks.appendChild(newTask);
        inputTask.value="";
    }
}



