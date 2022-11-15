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
    const todoCountId = `${target}-count`;

    this.render = function() {
        document.getElementById(root).innerHTML = `
            <div id="${todoListId}"></div>
            <div id="${todoCountId}" class="count"></div>
            <div id="${todoInputId}"></div>
        `;
    }

    this.render();

    const countTargetEl = document.getElementById(todoCountId);
    const todoCount = new TodoCount({
        targetEl: countTargetEl,
        initialState,
    });

    const targetEl = document.getElementById(todoListId);
    const todoList = new TodoList({
        targetEl,
        initialState,
        renderCount: todoCount.render,
    });

    const inputTargetEl = document.getElementById(todoInputId);
    const todoInput = new TodoInput({
        targetEl: inputTargetEl,
        onSubmit: this.onSubmit,
    });

    // this.count = function () {
    //     const doneTodoLength = todoList.state.filter((todo) => todo.isCompleted).length
    //     // console.log(todoList.state.length);
    //     // console.log(doneTodoLength);
    //
    //     document.getElementById(todoCountId).innerHTML = `
    //         <div>${todoList.state.length}</div>
    //         <div>${doneTodoLength}</div>
    //     `;
    // }
    //
    // this.count();


}
