//  Main idea of JavaScript
// 1. Save the data
// 2. Generate the HTML
// 3. Make it interactive

    const todoList = [
        {
            name: 'nhung',
            date: '2002-10-16'
        },
        {
            name: 'van',
            date: '1998-7-11'
        }
    ];

    // 1. Loop through the Array
    // 2. Create some HTML code for each Todo
    // 3. Put the HTML on web page
function renderTodoList(){
    let todoListHTML = '';
    
    todoList.forEach(function(todoObject,index){
        const {name, date} = todoObject
        const html = `
            <div>${name}</div>
            <div>${date}</div>
            <button 
                class="delete-todo-button js-delete-todo-button"
            >Delete</button>
        `;
        todoListHTML += html; 
    
        console.log(todoListHTML) 
    });
    // for(let i = 0; i < todoList.length; i++){
    //     const todoObject = todoList[i];
    //     // const name = todoObject.name;
    //     // const date = todoObject.date;
    //     const {name, date} = todoObject
    //     const html = `
    //         <div>${name}</div>
    //         <div>${date}</div>
    //         <button 
    //             class="delete-todo-button"
    //             onclick="
    //                 todoList.splice(${i},1);
    //                     renderTodoList();
    //             "
    //         >Delete</button>
    //     `;
    //     todoListHTML += html; 
    // }
    // console.log(todoListHTML)
    document.querySelector('.js-todoList').innerHTML = todoListHTML;

    document.querySelectorAll('.js-delete-todo-button').forEach((deleteButton, index) =>{
        deleteButton.addEventListener('click', ()=>{
            todoList.splice(index,1);
            renderTodoList();
        })
    })

}
document.querySelector('.js-add-todo-button').addEventListener('click', ()=>{
    addTodo();
})
function addTodo(){
    const inputElement = document.querySelector('.js-input-name');
    const name = inputElement.value;
    // console.log(name);

    const inputDate = document.querySelector('.js-input-date')
    const date = inputDate.value;
    todoList.push({
        // name: name,
        // date: date
        name, 
        date
    });
    // console.log(todoList)
    renderTodoList();
}
