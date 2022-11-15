function App({ root, target, initialState }) {

    this.onSubmit = function(e) {
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

    const todoListId = `${target}-list`;
    const todoInputId = `${target}-input`;

    this.render = function() {
        document.getElementById(root).innerHTML = `
            <div id="${todoListId}"></div>
            <div id="${todoInputId}"></div>
        `;
    }

    this.render();

    const targetEl = document.getElementById(todoListId);
    const todoList = new TodoList({
        targetEl,
        initialState,
    });

    const inputTargetEl = document.getElementById(todoInputId);
    const todoInput = new TodoInput({
        targetEl: inputTargetEl,
        onSubmit: this.onSubmit,
    });
}
