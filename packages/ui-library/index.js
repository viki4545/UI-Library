import * as snabbdom  from 'snabbdom';
import eventListenersModule from 'snabbdom/modules/eventlisteners';

let state = { count: 0 };
let patchFunction;

function createTemplate(state, props, updateState) {
    return h('div', [
        snabbdom.h('h1', state.count),
        snabbdom.h('button', { on: { click: () => updateState({ count: state.count + 1 }) } }, 'Add')
    ]);
}

function updateState(newState) {
    state = { ...state, ...newState };
    render();
}

function onMount() {
    console.log('Component mounted');
}

function render() {
    const newVNode = createTemplate(state, {}, updateState);
    patchFunction = snabbdom.patch(patchFunction, newVNode);
}

function mount(container) {
    patchFunction = snabbdom.patch(container, createTemplate(state, {}, updateState), { modules: { eventListeners: eventListenersModule } });
    onMount();
}

module.exports = { mount };
