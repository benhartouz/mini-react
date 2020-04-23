import QndReact from "./qnd-react";
import QndReactDom from "./qnd-react-dom";
import Counter from "./Counter";
import CounterHooks from "./CounterHooks";

const Greeting = ({ name }) => <p> Welcom {name}!</p>;
const App = (
    <div>
        <h1 className="primary">QndReact is quick and dirty react</h1>
        <p>It is about building your own React</p>
        <Greeting name="Mohamed Ben hartouz" />
        <CounterHooks countValue={0} />
        <Counter count={9}>
            <p>It is about building your own React</p>
        </Counter>
    </div>
);

QndReactDom.renderDom(App, document.getElementById("root"));
