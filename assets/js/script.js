// declare varabliles to get the value of input
var inputElement  = document.querySelector('#new-todo input');
// declare an array to save todo's after adding 
let todoArray = [{'text':'','date':'',index:'0'}];

// handeling the add button and check if the input is Entering Something
document.getElementById('add').addEventListener('click',function(){
    if(inputElement.value.length === 0){
        
        //change the border color while nthing is enter and click on add button
        inputElement.style.borderColor = "red";
        alert("Please Enter what to do");
        inputElement.focus();

    }else{
        
        listTodos();
    }
});

// handel the Enter key on keybord while press the Enter button
inputElement.addEventListener('keydown',function(event){
    if(event.key === "Enter"){
        if(inputElement.value.length != 0){
            listTodos();
        }
    }
});

/**
 * 
 * listTodos  function first push our new todo on todoArray and  list all our todo's which 
 * we have add to our list by Enter the text and press the Add button or Entering the Enter button
 * 
 */
function listTodos(){
    let dateTime = new Date().toLocaleDateString() +'  '+ new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        todoArray.push({"text":inputElement.value,"date":dateTime,index:inputElement.value.length});
        let p ='<ul>';
        for(todo of todoArray){
            if(todo.index != 0){
                p += `<li><button onclick="deleteFunction('${todo.index}')" class="btnDelete">Delete</button><span class="todoText"></span>${todo.text}</span><span id="dateSpan">${todo.date}</span></li>`;
            }   
        }
        p +='</ul>';
        document.getElementById('todo-list').innerHTML = p;
        inputElement.value = "";
}




//change the border color from red  while typing on the input
inputElement.addEventListener('keypress',function(){
    if(inputElement.value.length != 0){

        inputElement.style.borderColor = "#90b4d8";
    }
});

//delete todo's which we press the delete button
function deleteFunction(liContent=""){
    todoArray = todoArray.filter(todo => todo.index != liContent);
    console.log(todoArray);
    listTodos();
}
