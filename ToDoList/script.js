const taskInput=document.getElementById("taskInput");
const taskList=document.getElementById("taskList");
taskInput.addEventListener("keydown",function(e){
  if(e.key==="Enter"&&taskInput.value.trim()!==""){
    const listItem=document.createElement("li");
    const checkbox=document.createElement("input");
    checkbox.type="checkbox";
    const taskText=document.createElement("span");
    taskText.textContent=taskInput.value;
    checkbox.addEventListener("change",function(){
      listItem.classList.toggle("completed",checkbox.checked);
    });
    listItem.appendChild(checkbox);
    listItem.appendChild(taskText);
    taskList.appendChild(listItem);
    taskInput.value="";
  }
});