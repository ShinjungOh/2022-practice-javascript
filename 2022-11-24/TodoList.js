export default function TodoList({$target, initialState, onClick, onRemove}) {
    this.$element = document.querySelector('div');
    $target.appendChild(this.$element);

    this.state = initialState || [];

    $target.addEventListener('click', function (e) {
        const id = e.target.closest('li').dataset.id;

        if (e.target.className === 'remove-button') {
            e.stopPropagation();
            onRemove(id);
        } else {
            onClick(id);
        }
    })

    this.setState = function (nextState) {
        this.state = nextState
        this.render();
    }

    this.render = function () {
        this.$element.innerHTML = this.state
            .map((todo) => `
                <ul>${todo.isCompleted
                    ? <li data-id="${todo._id}">
                        <s>${todo.content}</s>
                        <button class="remove-button">Remove</button>
                    </li>
                    : <li data-id="${todo._id}">${todo.content}
                        <button class="remove-button">Remove</button>
                    </li>
                }
                 </ul>`
            ).join('');
    }

    this.render();
}
