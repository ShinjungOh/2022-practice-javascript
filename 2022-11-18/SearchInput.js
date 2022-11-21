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

    this.render();
    // document.getElementById('search-keyword')
    this.$element
        .querySelector('input[type="text"]')
        .addEventListener('keyup', onChangeInput);
}

export default SearchInput;
