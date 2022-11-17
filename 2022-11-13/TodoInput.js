function TodoInput({ key, targetEl, onSubmit }) {
    const submitId = `${key}-submit`;
    const resetId = `${key}-reset`;
    this.render = function () {
        targetEl.innerHTML = `
            <input type="text" placeholder="할 일을 입력하세요."/>
            <button id="${submitId}" type="submit">추가</button>
            <button id="${resetId}" type="buton">초기화</button>
        `;

        const buttonEl = document.getElementById(submitId);
        buttonEl.addEventListener('click', onSubmit);

        const resetEl = document.getElementById(resetId);
        resetEl.addEventListener('click', () => {
            window.dispatchEvent(new CustomEvent(`${key}-removeAll`));
        })
    }

    this.render();
}
