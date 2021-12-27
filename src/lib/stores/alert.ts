import type { Alert } from '$lib/types';
import { writable } from 'svelte/store';

export const alert = writable<Alert>({ state: 'none', message: '' });
