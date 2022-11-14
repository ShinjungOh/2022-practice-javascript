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
    // console.log(e.target);
    const inputEl = e.target.parentNode.querySelector('input');
    // console.log(inputEl.value);
    data.push({
        text: inputEl.value,
        isCompleted: false
    });

    // console.log('data >>>', data)
    todoList.setState(data);
    inputEl.value = "";
    inputEl.focus();
}

const targetEl = document.querySelector('#todo-list');
const todoList = new TodoList({
    targetEl,
    initialState: data
});

const inputTargetEl = document.querySelector('#todo-input');
const todoInput = new TodoInput({
    targetEl: inputTargetEl,
    submit,
});

const inputTargetEl2 = document.querySelector('#todo-input2')
const todoInput2 = new TodoInput({
    targetEl: inputTargetEl2,
    submit,
});
