function TodoCount({ targetEl, initialState }) {
    const calcLengthState = function (state) {
        const completedLength = state.filter((todo) => todo.isCompleted).length
        return {
            todoLength: state.length,
            completedLength,
        }
    }

    this.render = function (state) {
        const { todoLength, completedLength } = calcLengthState(state);
        targetEl.innerHTML = `
            <div>전체 할 일: ${todoLength}</div>
            <div>완료한 일: ${completedLength}</div>    
        `;
    }

    this.render(initialState);
}
