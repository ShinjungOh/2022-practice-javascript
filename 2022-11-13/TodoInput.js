function TodoInput({targetEl, submit}) {
    this.render = function () {
        targetEl.innerHTML = `
            <input type="text" placeholder="할 일을 입력하세요."/>
            <button type="submit">추가</button>
        `;

        const buttonEl = targetEl.querySelector('button');
        buttonEl.addEventListener('click', submit);
    }

    this.render();
}
