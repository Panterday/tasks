import style from "./styles.css";
/* import {ToDo} from "./classes/todo.class"
import { ToDoList } from "./classes/todo-list.class"; */
import {ToDo, ToDoList} from "./classes"
import { createTaskHtml } from "./js/components";

export const myList = new ToDoList(); 

console.log (myList.toDos);

myList.toDos.forEach(todo => createTaskHtml(todo)); 