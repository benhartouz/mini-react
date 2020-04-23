import QndReact from "./qnd-react";
import { h } from "snabbdom";
// Create Element

var currentRoot = "";
const createElement = (type, props = {}, ...children) => {
    // Check if the type is a function for the functional component
    if (type.prototype && type.prototype.isQndReactClassComponent) {
        const componentIsntance = new type(props);
        const parentComponentInstance = new QnReact.Component();
        // override state function to prevent define another setstate function in the component child
        componentIsntance.setState = parentComponentInstance.setState;
        componentIsntance.__vNode = componentIsntance.render();
        componentIsntance.__vNode.data.hook = {
            create: () => {
                componentIsntance.componentDidMount();
            },
        };
        return componentIsntance.__vNode;
    }
    if (typeof type == "function") {
        const fcIsntance = {
            __vNode: type(props),
            render: () => {},
        };
        fcIsntance.__vNode.data.hook = {
            create: () => {
                // didmount
            },
        };
        currentRoot = fcIsntance;
        return fcIsntance.__vNode;
    }

    props = props || {};
    let dataProps = {};
    let eventProps = {};

    for (let propKey in props) {
        if (propKey.startsWith("on")) {
            const event = propKey.substring(2).toLocaleLowerCase();
            eventProps[event] = props[propKey];
        } else {
            dataProps[propKey] = props[propKey];
        }
    }
    return h(type, { props: dataProps, on: eventProps }, children);
};
// Component
class Component {
    constructor() {}

    componentDidMount() {}

    setState(parialState, callback) {
        if (typeof parialState == "object") {
            this.state = {
                ...this.state,
                ...parialState,
            };
        } else if (typeof parialState == "function") {
            this.state = {
                ...this.state,
                ...parialState(this.state),
            };
        }
        // call the update function
        QndReact.__updater(this);
        callback && callback();
    }

    render() {}
}
Component.prototype.isQndReactClassComponent = true;

const useState = (value) => {
    let currentValue = value;
    const setState = (value) => {
        currentValue = value;
        // call the update function
        console.log("currentRoot", currentRoot);
        QndReact.__updater(currentRoot);
    };
    return [value, setState];
};

const QnReact = {
    createElement,
    Component,
    useState,
};
export default QnReact;
