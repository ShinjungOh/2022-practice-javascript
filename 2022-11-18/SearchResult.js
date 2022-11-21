function SearchResult ({
    $target,
    initialState,
}) {
    this.$element = document.createElement('div');
    $target.appendChild(this.$element);

    this.state = initialState;

    this.render = function () {
        this.$element.innerHTML = this.state
            .map((concert) => `<div style="display: inline-block; width: 33%"><img src="${concert.poster}" style="object-fit: cover; width: 100%;"></div>`)
            .join('');
    }

    this.setState = function (nextData) {
        this.state = nextData;
        this.render();
    }

    this.render();
}

export default SearchResult;
