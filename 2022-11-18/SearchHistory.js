function SearchHistory({
    $target,
    initialState,
}) {
    this.state = initialState;
    this.$element = document.createElement('ol');
    $target.appendChild(this.$element);

    this.setState = function (nextState) {
        this.state = nextState;
        this.render();
    }

    this.render = function () {
        this.$element.innerHTML = this.state.map((history) => `<li>${history}</li>`).join('');
    }

    this.render();
}

export default SearchHistory;
