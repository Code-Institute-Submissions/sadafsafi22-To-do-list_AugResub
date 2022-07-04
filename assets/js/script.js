
var inputElement  = document.querySelector('#new-todo input');
let todoArray = [{'text':'first','date':'2021-01-01'},{'text':'second','date':'2021-01-01'},];

document.getElementById('add').addEventListener('click',function(){
    if(inputElement.value.length == 0){

            inputElement.style.borderColor = "red";
            alert("Please Enter what to do");
            inputElement.focus();

    }else{
        
        let dateTime = new Date().toLocaleDateString() +'  '+ new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        todoArray.push({"text":inputElement.value,"date":dateTime});
        let p ='';
        for(todo of todoArray){
            p += `<p>${todo.text}---${todo.date}</p>`;
        }

        document.getElementById('todo-list').innerHTML = p;
      
        
    }
});



//change the border color from red  while typing on the input
inputElement.addEventListener('keypress',function(){
    if(inputElement.value.length != 0){

        inputElement.style.borderColor = "#90b4d8";
    }
});
