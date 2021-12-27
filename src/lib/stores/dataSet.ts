import type { DataSet } from '$lib/types';
import { writable } from 'svelte/store';

export const dataSet = writable<DataSet>('vax');
