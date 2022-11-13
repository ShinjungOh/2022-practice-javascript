function TodoInput({ targetEl, submit }) {
    // this.$inputElement = document.createElement('input');
    // this.$buttonElement = document.createElement('button');
    // targetEl.appendChild(this.$inputElement);
    // targetEl.appendChild(this.$buttonElement);

    // this.submit = function() {
    //     console.log('submit');
    //     console.log(targetEl);
    //     const inputEl = document.getElementById('input-todo');
    //     console.log(inputEl.value);
    // }

    this.render = function () {
        targetEl.innerHTML = `
            <input type="text" placeholder="할 일을 입력하세요."/>
            <button type="submit" value="추가">추가</button>
        `;
        // console.log('render >>>', targetEl);
        // console.log('targetEl.childNodes >>>>', targetEl.children);
        // console.log('targetEl.buttonTodo >>>', targetEl.querySelector('button'));
        // const buttonEl = document.getElementById('button-todo');
        const buttonEl = targetEl.querySelector('button');
        buttonEl.addEventListener('click', submit);
    }

    this.render();
}
