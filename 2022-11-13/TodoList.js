function TodoList({ targetEl, initialState, renderCount }) {
    this.$element = document.createElement('ul');
    targetEl.appendChild(this.$element);

    this.state = initialState;

    this.render = function () {
        this.$element.innerHTML = this.state
            .map((todo, index) => todo.isCompleted
                ? `<li data-id="${index}"><s>${todo.text}</s> <button>삭제</button></li>`
                : `<li data-id="${index}">${todo.text} <button>삭제</button></li>`)
            .join('');
        renderCount(this.state);
    }

    this.setState = function (nextState) {
        this.state = nextState;
        this.render();
    }

    this.onDelete = function (id) {
        const filterState = this.state.filter((_, index) => index !== id);
        this.setState(filterState);
    }

    this.onToggleIsCompleted = function (id) {
        const mapState = this.state.map((todo, index) => index === id ? {
            ...todo,
            isCompleted: !todo.isCompleted
        } : todo);
        this.setState(mapState);
    }

    this.$element.addEventListener('click', (e) => {
        console.log(e.target);
        // console.log(e.target.tagName);
        if (e.target.tagName === 'BUTTON') {
            // const dataId = e.target.parentNode.getAttribute('data-id');
            const dataId = e.target.parentNode.dataset.id;
            console.log('>>>> dataId', dataId);
            // console.log('parent >>>>', e.target.parentNode);
            // console.log(dataId);
            this.onDelete(parseInt(dataId, 10));
        }

        if (e.target.tagName === 'LI') {
            const dataId = e.target.dataset.id;
            // console.log('>>>', dataId);
            this.onToggleIsCompleted(parseInt(dataId, 10));
        }

        if (e.target.tagName === 'S') {
            const dataId = e.target.parentNode.dataset.id;
            // console.log('>>>', dataId);
            this.onToggleIsCompleted(parseInt(dataId, 10));
        }
    });

    this.render();
}
