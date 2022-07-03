function handleClick(){
  var text = document.getElementById("story").value;
   var date = document.getElementById("date").value;

   if(text === "" && date === ""){
      alert("input field cant be empty")
      
   }else{
      var newTask = document.createElement("div"); //To create div
      newTask.setAttribute("class", "taskInd"); //This attaches the class to the div <div class="taskInd"></div>
   
      var textBox  = document.createElement("i"); //This creates the i element <i></i>
      textBox.innerHTML = text;  // This will be the value of the form<i>lorem</i>
   
      var small = document.createElement("small"); //To create the small element <small></small>
      small.innerHTML = date; //To collect the value of date <small>09/09/2009</small>
   
      newTask.appendChild(textBox); //<div>
                                       //<i>lorem</i>
                                    //</div>
      div.appendChild(small);//<div>
                                 //<i>lorem</i> 
                                 //<small></small>
                              //</div>
   
      var taskarea = document.getElementById("taskarea")
      taskarea.appendChild(div);

      document.getElementById("story").value = "";
      document.getElementById("date").value = "";
   
   }



}

