function SearchInput({
    $target,
    onChangeInput,
}) {
    this.$element = document.createElement('div');
    $target.appendChild(this.$element);

    this.render = function () {
        this.$element.innerHTML = `
            <input type="text" />
        `
    }

    this.setState = function (nextState) {
        this.$element.querySelector('input').value = nextState;
    }

    this.render();
    // document.getElementById('search-keyword')
    this.$element
        .querySelector('input[type="text"]')
        .addEventListener('keyup', (e) => {
            const { value } = e.target;
            onChangeInput(value, true);
        });
}

export default SearchInput;
