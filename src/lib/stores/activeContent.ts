import type { CodeViewerContent } from '$lib/types';
import { writable } from 'svelte/store';

export const active = writable<CodeViewerContent>('settings');
