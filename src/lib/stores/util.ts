import { browser } from '$app/environment';
import type { Writable } from 'svelte/store';
import { writable } from 'svelte/store';

export function createLocalStorageValue<T>(key: string, defaultValue: T): Writable<T> {
	let clientValue: T;
	if (browser) {
		clientValue = JSON.parse(window.localStorage.getItem(key));
		if (!clientValue) window.localStorage.setItem(key, JSON.stringify(defaultValue));
	}
	const store = writable(clientValue || defaultValue);
	store.subscribe((value) => {
		if (browser) {
			window.localStorage.setItem(key, JSON.stringify(value));
		}
	});
	return store;
}
