import QndReact from "./qnd-react";

const Counter = () => {
    const [count, setCount] = QndReact.useState(20);
    console.log("count", count);
    return (
        <div>
            <h1>Manage counter component using hooks</h1>
            <p>Count: </p>
            <button
                onClick={() => {
                    setCount(count + 1);
                }}
            >
                + 1
            </button>
        </div>
    );
};

export default Counter;
