function SearchResult ({
    $target,
    initialState,
    onChangeInput,
}) {
    this.$element = document.createElement('div');
    $target.appendChild(this.$element);

    this.state = initialState;

    this.render = function () {
        this.$element.innerHTML = this.state
            .map((concert) => `
                <div style="display: inline-block; width: 33%; vertical-align: top;">
                    <img src="${concert.poster}" style="object-fit: cover; width: 100%;">
                    <ul>
                        ${concert.musicians.map((musician) => `<li style="cursor: pointer;">${musician}</li>`).join('')}
                    </ul>
                </div>
            `).join('');
    }

    this.setState = function (nextData) {
        this.state = nextData;
        this.render();
    }

    this.render();

    this.$element.addEventListener('click', (e) => {
        const { textContent } = e.target;
        onChangeInput(textContent);
    });
}

export default SearchResult;
