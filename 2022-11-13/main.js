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

const onSubmit = (e) => {
    const inputEl = e.target.parentNode.querySelector('input');

    todoList.setState([
        ...todoList.state,
        {
            text: inputEl.value,
            isCompleted: false,
        }
    ]);

    inputEl.value = "";
    inputEl.focus();
}

const targetEl = document.querySelector('#todo-list');
const todoList = new TodoList({
    targetEl,
    initialState: data,
});

const inputTargetEl = document.querySelector('#todo-input');
const todoInput = new TodoInput({
    targetEl: inputTargetEl,
    onSubmit,
});
