const divTaskList = document.querySelector(".todo-list");

export const createTaskHtml = (task)=> {

    const htmlTask = `
    <li class="${ (task.completed) ? 'completed' : ''}" data-id="abc">
        <div class="view">
            <input class="toggle" type="checkbox" checked>
            <label>${task.task}</label>
            <button class="destroy"></button>
        </div>
        <input class="edit" value="Create a TodoMVC template">
    </li>
    `;

    const div = document.createElement('div');
    div.innerHTML = htmlTask; 

    divTaskList.append(div);
    
    return div; 

}