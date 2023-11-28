import { reactive } from "./reactive";

const state = reactive({
	count: 0,
	a: 1,
	b: 2,
});

function render() {
    state.count++;
    state.a;
    state.b;
}

render();
