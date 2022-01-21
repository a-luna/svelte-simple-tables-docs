import type { ActiveContent, CodeExample } from '$lib/types';
import { writable } from 'svelte/store';

export const active = writable<ActiveContent>('docs');
export const codeExample = writable<CodeExample>('table-component');
