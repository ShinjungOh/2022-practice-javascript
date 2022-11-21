export function SearchResult ({initialState, $target}) {
    this.$element = document.createElement('div');
    $target.appendChild(this.$element);

    this.state = initialState;

    this.render = function () {
        this.$element.innerHTML = this.state
            .map((el) => `<div>${el}</div>`)
            .join('');
    }

    this.setState = function (nextData) {
        this.state = nextData;
        this.render();
    }

    console.log(1);
    this.render();
    console.log(2);
}

// export default SearchResult;
