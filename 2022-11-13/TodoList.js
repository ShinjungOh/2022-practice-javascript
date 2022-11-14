function TodoList({targetEl, initialState}) {
    this.$element = document.createElement('ul');
    targetEl.appendChild(this.$element);

    this.state = initialState;

    this.render = function () {
        this.$element.innerHTML = this.state
            .map((todo, index) => `<li>${todo.text} <button data-id="${index}">삭제</button></li>`)
            .join('');
    }

    this.setState = function (nextState) {
        this.state = nextState;
        this.render();
    }

    this.onDelete = function (id) {
        // console.log('delete');
        const filterData = this.state.filter((_, index) => index !== id);
        todoList.setState(filterData);
    }

    this.$element.addEventListener('click', (e) => {
        // console.log(e.target);
        // console.log(e.target.tagName);
        if (e.target.tagName === 'BUTTON') {
            const dataId = e.target.getAttribute('data-id');
            console.log(dataId);
            // console.log(typeof dataId);
            this.onDelete(parseInt(dataId, 10));
        }
    })

    this.render();
}
