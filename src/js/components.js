import { ToDo} from '../classes'
import { myList } from '../index'

const divTaskList = document.querySelector(".todo-list");
const txtInput = document.querySelector(".new-todo"); 
const destroyButton = document.querySelector(".clear-completed"); 

export const createTaskHtml = (task)=> {

    const htmlTask = `
    <li class="${ (task.completed) ? 'completed' : ''}" data-id="${task.id}">
        <div class="view">
            <input class="toggle" type="checkbox" ${(task.completed) ? 'checked' : ''}>
            <label>${task.task}</label>
            <button class="destroy"></button>
        </div>
        <input class="edit" value="Create a TodoMVC template">
    </li>
    `;

    const div = document.createElement('div');
    div.innerHTML = htmlTask; 

    divTaskList.append(div.firstElementChild);
    
    return div.firstElementChild; 

}

//Events
txtInput.addEventListener('keyup', event => {

    if(event.code == 'Enter' && txtInput.value.length>0){
        const newTask = new ToDo (txtInput.value);

        myList.newToDo(newTask); 
        txtInput.value = ''; 

        console.log(myList);
        
        createTaskHtml(newTask); 
    } 
})

divTaskList.addEventListener('click', (event)=>{
     
    const elementName = event.target.localName; //input, label or button. 
    const element = event.target.parentElement.parentElement; //Li reference. 

    const taskId = element.getAttribute('data-id'); 

    console.log(taskId)
    console.log(element)

    if(elementName.includes('input')){
        myList.markCompleted(taskId);
        element.classList.toggle('completed');  
    }else if (elementName.includes('button')){
        console.log("You pressed a button ")
        myList.deleteToDo(taskId);
        divTaskList.removeChild(element);  
    }
    console.log(myList)
})

destroyButton.addEventListener('click', ()=>{
    myList.deleteAllcompleted(); 
    for (let i = divTaskList.children.length-1; i>=0; i--){
        const tempElem = divTaskList.children[i]; 
        console.log(tempElem); 
        if(tempElem.classList.contains('completed')){
            divTaskList.removeChild(tempElem); 
        }
    }
})