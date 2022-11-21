import SearchInput from "./SearchInput.js";

export default function App({ target }) {
    this.$element = document.getElementById(target);
    this.state = {
        text: '',
        concertList: [],
    }

    this.setState = function (nextState) {
        this.state = nextState;
    }

    const fetchConcertList = async (text) => {
        const url = `https://api.idiots.band/api/search?keyword=${text}`;
        try {
            const response = await fetch(url);
            const data = await response.json();
            return data;
        } catch (e) {
            return [];
        }
    }

    const onChangeInput = async (e) => {
        const { value } = e.target;
        this.setState({
            ...this.state,
            text: value,
        });
        const response = await fetchConcertList(value);
        this.setState({
            ...this.state,
            concertList: response,
        })
    }

    new SearchInput({
        $target: this.$element,
        onChangeInput,
    })
}
