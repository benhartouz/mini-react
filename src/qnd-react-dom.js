import QndReact from "./qnd-react";
import * as snabbdom from "snabbdom";
import propsModule from "snabbdom/modules/props";
import eventListenersModule from "snabbdom/modules/eventlisteners";
const reconcile = snabbdom.init([propsModule, eventListenersModule]);

let rootVNode;

const renderDom = (el, rootElement) => {
    if (rootVNode == null) {
        rootVNode = rootElement;
    }
    rootVNode = reconcile(rootElement, el);
};
// QndReactDom telling React how to update DOM
QndReact.__updater = (componentInstance) => {
    // logic on how to update the DOM when you call this.setState
    // old virtual node
    const oldVNode = componentInstance.__vNode;
    // new virtual node
    const newVNode = componentInstance.render();
    // reconcile new virtual node
    componentInstance.__vNode = reconcile(oldVNode, newVNode);
};
const QnReactDom = {
    renderDom,
};
export default QnReactDom;
