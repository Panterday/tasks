import style from "./styles.css";
/* import {ToDo} from "./classes/todo.class"
import { ToDoList } from "./classes/todo-list.class"; */
import {ToDo, ToDoList} from "./classes"
import { createTaskHtml } from "./js/components";

const myList = new ToDoList(); 
const task = new ToDo("Testing JS");
myList.newToDo(task); 


console.log(myList); 

task.completed = true; 

createTaskHtml(task)