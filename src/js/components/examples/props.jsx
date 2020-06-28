//step3: Our Welcome component returns a <h1>Hello, Sara</h1> element as the result.
function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
}

//step2: React calls the Welcome component with {name: 'Sara'} as the props.
const element = <Welcome name="Sara" />;

// step1: We call ReactDOM.render() with the <Welcome name="Sara" /> element
ReactDOM.render(
    element,
    document.getElementById('root')
);