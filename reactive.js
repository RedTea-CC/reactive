import { isObject } from "./utils";

export function reactive(target) {
	if (!isObject(target)) {
		return target;
	}

	return new Proxy(target, {
		get(target, key) {},
		set(target, key, value) {},
	});
}
