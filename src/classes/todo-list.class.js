import {ToDo} from './todo.class'

export class ToDoList {

    constructor(){
        //this.toDos = []; 
        this.loadLocalStorage(); 
    }

    newToDo(todo){
        this.toDos.push(todo);
        this.saveLocalStorage();  
    }

    deleteToDo(id){
        this.toDos = this.toDos.filter(todo => todo.id != id)
        this.saveLocalStorage(); 
    }

    markCompleted(id){
        for (const todo of this.toDos) {
            if(todo.id == id){
                todo.completed = !todo.completed;
                this.saveLocalStorage();  
                break;  
            }
        }
    }

    deleteAllcompleted(){
        this.toDos = this.toDos.filter(todo => !todo.completed);
        this.saveLocalStorage();      
    }

    saveLocalStorage(){
        localStorage.setItem('todo', JSON.stringify(this.toDos)); 
    }

    loadLocalStorage(){

        this.toDos = (localStorage.getItem('todo')) ? this.toDos = JSON.parse(localStorage.getItem('todo')) : this.toDos = [];
        this.toDos = this.toDos.map(obj => ToDo.fromJson(obj));  
    }

}