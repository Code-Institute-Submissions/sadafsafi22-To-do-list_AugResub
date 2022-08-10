// declare varabliles to get the value of input
var inputElement  = document.getElementById('todoText');
var InputDate = document.getElementById('todoDate');
// declare an array to save todos

var todoArray = [{'text':'','date':'','index':'0'}];

// handeling the add button and check if the input is Entering Something
document.getElementById('add').addEventListener('click',function(){
    if(inputElement.value.length === 0){
        
        //change the border color while nthing is enter and click on add button
        inputElement.style.borderColor = "red";
        alert("Please Enter what todo");
        inputElement.focus();

    }else if(InputDate.value === ''){

        InputDate.style.borderColor = "red";
        alert("Please Select a Date for todo");
        InputDate.focus();

    }else{
        
        //alert(InputDate.value);
        //listTodos();
        createTodo();
    }
});

// handel the Enter key on keybord while press the Enter button for input type text
inputElement.addEventListener('keydown',function(event){
    if(event.key === "Enter"){
        if(inputElement.value.length === 0){
        
            //change the border color while nthing is enter and click on add button
            inputElement.style.borderColor = "red";
            alert("Please Enter what todo");
            inputElement.focus();
    
        }else if(InputDate.value === ''){
    
            InputDate.style.borderColor = "red";
            alert("Please Select a Date for todo");
            InputDate.focus();
    
        } else {
            createTodo();
        }
    }
});


// handel the Enter key on keybord while press the Enter button for input type date
InputDate.addEventListener('keydown',function(event){
    if(event.key === "Enter"){
        if(inputElement.value.length === 0){
        
            //change the border color while nthing is enter and click on add button
            inputElement.style.borderColor = "red";
            alert("Please Enter what todo");
            inputElement.focus();
    
        }else if(InputDate.value === ''){
    
            InputDate.style.borderColor = "red";
            alert("Please Select a Date for todo");
            InputDate.focus();
    
        } else {
            createTodo();
        }
    }
});

/**
 * createTodo function this function is for adding new todo at todoArray object
 * 
 */
function createTodo(){
    var todoDate=new Date(InputDate.value).toLocaleDateString("en-US");
    let arrayIndexGenerate = (inputElement.value.length != 0 ) ? inputElement.value.length + Math.round((Math.random() * 100)) : 0;
    //var todoArray = [{'text':'','date':'','index':'0'}];
    //console.log({"text":inputElement.value,"date":todoDate ,'index':arrayIndexGenerate});
    this.todoArray = this.todoArray || [];
    todoArray.push({"text":inputElement.value,"date":todoDate ,'index':arrayIndexGenerate});
    
    inputElement.value = "";
    InputDate.value = "";
    InputDate.style.borderColor = '#d1d3d4';

    window.localStorage.setItem('toDoArrayData', JSON.stringify(todoArray));
    
    //console.log(gotedData);
    // for(let a of gotedData){
    //     console.log(a);
    // }
    listTodos();
}

/**
 * 
 * listTodos function is for listing todos and after adding 
 * and deleting new todo, it refresh the list 
 * 
 */
function listTodos(){

    //get Data back from localStorage
    todoArray = JSON.parse(window.localStorage.getItem('toDoArrayData'));
    if(todoArray != null){
        //console.log(Object.keys(todoArray).length);

        //sortoing our todoArrayObject by using the date
        todoArray.sort(function(a,b){
            const date1 = new Date(a.date);
            const date2 = new Date(b.date)
            return  date1 - date2
        });
        
        // loop the array to display the Elements 
        let p ='<ul>';
        for(let todo of todoArray){
            if(todo.index != 0){
                let todoDate = new Date(todo.date).toLocaleDateString("en-US");
                p += `<li><button onclick="deleteFunction('${todo.index}')" class="btnDelete">Delete</button><input type="checkbox" onclick="changeWhileChecked(event)"><span class="todoText"></span>${todo.text}</span><span id="dateSpan">${todoDate}</span></li>`;
            }
        }
        p +='</ul>';
        document.getElementById('todo-list').innerHTML = p;
    }
     
    
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
    window.localStorage.setItem('toDoArrayData', JSON.stringify(todoArray));
    console.log(todoArray);
    listTodos();
}

// change the textDecoration to line-throuth when checkbox is checked 
function changeWhileChecked(event){
    const a = event.target.closest('input').checked;
    if(a)
     event.target.closest('li').style.textDecoration= 'line-through';
    else
      event.target.closest('li').style.textDecoration= 'none';
   }

window.onload = function(){
    listTodos();
   }