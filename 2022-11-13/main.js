// const data = JSON.parse(localStorage.getItem('todos')) || [];

// const onSubmit = (e) => {
//     const inputEl = e.target.parentNode.querySelector('input');
//
    // todoList.setState([
    //     ...todoList.state,
    //     {
    //         text: inputEl.value,
    //         isCompleted: false,
    //     }
    // ]);
//
//     inputEl.value = "";
//     inputEl.focus();
// }

// const targetEl = document.querySelector('#todo-list');
// const todoList = new TodoList({
//     targetEl,
//     initialState: data,
// });
//
// const inputTargetEl = document.querySelector('#todo-input');
// const todoInput = new TodoInput({
//     targetEl: inputTargetEl,
//     onSubmit,
// });

const app = new App({
    root: 'root',
    target: 'todo',
});

const app2 = new App({
    root: 'root2',
    target: 'todo3shinjung',
});


// const app = new App({
//     initialState: data,
//     // target: 'todo',
// });
