import QndReact from "./qnd-react";

class Counter extends QndReact.Component {
    constructor(props) {
        super(props);
        console.log("props", props);
        this.state = {
            count: 0,
        };
    }
    setState() {
        console.log("setState");
    }
    render() {
        return (
            <div>
                <p>Count: {this.state.count}</p>
                <button
                    onClick={() => {
                        this.setState({ count: this.state.count + 1 }, () => {
                            console.log("update state");
                        });
                    }}
                >
                    + 1
                </button>
                <button
                    onClick={() => {
                        this.setState((state) => {
                            console.log(state);
                            return {
                                count: state.count + 1,
                            };
                        });
                    }}
                >
                    - 1
                </button>
            </div>
        );
    }
}

export default Counter;
