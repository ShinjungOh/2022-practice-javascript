import TodoList from './TodoList.js'

const data =[
    {
        _id: '할 일의 고유값. 숫자와 문자가 섞여있는 문자로 되어있음',
        content: 'text',
        isCompleted: false
    }
];

export default function App ({$target}) {
    this.state = [];

    this.render = function () {

    }

    this.render();

    this.setState = function () {

    }

    const onClick = (id) => {

    }

    const onRemove = (id) => {

    }

    const todolist= new TodoList({
        $target,
        initialState: data,
        onClick,
        onRemove,
    });
}
