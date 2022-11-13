const data = [
    {
        text: 'JS 공부하기',
        isCompleted: false,
    },
    {
        text: 'JS 복습하기',
        isCompleted: true,
    },
];

const submit = (e) => {
    console.log(e.target)
    console.log('>>>');
    // const inputEl = e.target.previousSibling.previousSibling;
    // const inputEl = document.getElementById('input-todo');
    const inputEl = e.target.parentNode.querySelector('input');
    data.push({ text: inputEl.value, isCompleted: false });
    todoList.setState(data);
    inputEl.value = '';
    inputEl.focus();
    // console.log(inputEl.value);
}

const targetEl = document.querySelector('#todo-list');
const todoList = new TodoList({
    targetEl,
    initialState: data
});

const target = document.querySelector('#todo-input');
const todoInput = new TodoInput({
    targetEl: target,
    submit,
});

const target2 = document.querySelector('#todo-input2');
const todoInput2 = new TodoInput({
    targetEl: target2,
    submit,
});
