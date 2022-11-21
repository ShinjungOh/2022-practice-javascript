import SearchInput from "./SearchInput.js";
import SearchResult from "./SearchResult.js";

const dummyData = [
    {
        "title": "A.O.R CRAZY-FRIDAY",
        "startDate": "2020-04-24T00:00:00.000Z",
        "endDate": "2020-04-24T00:00:00.000Z",
        "musicians": [
            "이디어츠",
            "알라리깡숑",
            "유수림",
            "이븐 이프",
            "원디비",
            "일곱시반"
        ],
        "poster": "https://indistreet-api.roto.codes/uploads/14c46850c424430db08d4607dac242b5_450c568de0.jpeg"
    },
    {
        "title": "아직 젊은데 머리가 하얗게 변한 고양이 세마리 애비 전설의 코딩용사 이디어츠의 베이시스트 김로토의 생일파티",
        "startDate": "2020-04-11T00:00:00.000Z",
        "endDate": "2020-04-11T00:00:00.000Z",
        "musicians": [
            "이디어츠",
            "알라리깡숑",
            "씩제프",
            "극동아시아타이거즈",
            "데드챈트"
        ],
        "poster": "https://indistreet-api.roto.codes/uploads/49ce81550d9f4c40bc3dd01aee5ab0db_e0de265b08.jpg"
    },
    {
        "title": "FOR THE NEW KIDS",
        "startDate": "2020-03-20T09:00:00.000Z",
        "endDate": "2020-03-20T13:00:00.000Z",
        "musicians": [
            "이디어츠",
            "알라리깡숑",
            "극동아시아타이거즈",
            "메리헤이데이"
        ],
        "poster": "https://indistreet-api.roto.codes/uploads/81e2126e0ec1410cab195048c51643fc_5d9b2a2bdd.jpg"
    },
    {
        "title": "오롯한 라이브와 함께",
        "startDate": "2020-01-09T00:00:00.000Z",
        "endDate": "2020-01-09T00:00:00.000Z",
        "musicians": [
            "이디어츠",
            "알라리깡숑",
            "사서함",
            "비포유슬립"
        ],
        "poster": "https://indistreet-api.roto.codes/uploads/337773b57bd04e81b7a0314af5b0a7d1_82e6dfede7.jpg"
    }
];

export default function App({ target }) {
    this.$element = document.getElementById(target);
    this.state = {
        text: '',
        concertList: [],
    }

    this.setState = function (nextState) {
        this.state = nextState;
        searchResult.setState(this.state.concertList);
    }

    const fetchConcertList = async (text) => {
        const url = `https://api.idiots.band/api/search?keyword=${text}`;
        try {
            // const response = await fetch(url);
            // const data = await response.json();
            const data = dummyData.filter((dummy) => dummy.musicians.includes(text));
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

    const searchResult = new SearchResult({
        $target: this.$element,
        initialState: this.state.concertList,
    })
}
