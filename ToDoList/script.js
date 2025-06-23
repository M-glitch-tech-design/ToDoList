function addTask(){
  const taskInput=document.getElementById("taskInput");
  const taskList=document.getElementById("taskList");
  const taskText=taskInput.value.trim();
  if(taskText!==""){
    const listItem=document.createElement("li");
    const checkbox=document.createElement("input");
    checkbox.type="checkbox";
    checkbox.onclick=function(){
      listItem.classList.toggle("completed",checkbox.checked);
    };
    const span=document.createElement("span");
    span.textContent=taskText;
    listItem.appendChild(checkbox);
    listItem.appendChild(span);
    taskList.appendChild(listItem);
    taskInput.value="";
  }
}
