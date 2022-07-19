<script lang="ts">
	import type { SelectMenuItem } from '$lib/types';
	import { pageWidth } from '@a-luna/svelte-simple-tables/stores';
	import type { ColumnSettings, TableState } from '@a-luna/svelte-simple-tables/types';
	import { getDefaultColHeader } from '@a-luna/svelte-simple-tables/util';
	import Svelecte from 'svelecte/src/Svelecte.svelte';

	type T = $$Generic;

	export let tableState: TableState<T>;
	export let columnSettings: ColumnSettings<T>[];
	export let gridRow: number = 0;
	export let gridCol: number = 0;
	export let gridColSpan: number = 1;

	$: sortByOptions = createSelectMenuItems<T>(columnSettings);

	function createSelectMenuItems<T>(columnSettings: ColumnSettings<T>[]): SelectMenuItem<T>[] {
		const allColumns = columnSettings.map((col) => ({
			value: col.propName,
			label: col?.headerText ?? getDefaultColHeader(col.propName),
			sortable: col?.sortable ?? true
		}));
		return allColumns.filter((col) => col.sortable);
	}

	function handleSortByChanged(e: CustomEvent<keyof T>) {
		const value = e.detail;
		if (sortByOptions.map((col) => col.value).includes(value)) {
			const colHeaderQuery = `#${$tableState.tableId} .sortable[data-stat-name="${String(
				value
			)}"] .header-content`;
			document.querySelector<HTMLElement>(colHeaderQuery)?.click();
		}
	}
</script>

<label
	for="sort-by"
	class="label"
	style="grid-row-start: {gridRow}; grid-column-start: {gridCol}; grid-column-end: {gridCol +
		gridColSpan};"
	data-col={gridCol}
>
	<div class="flex flex-row items-center gap-3">
		<span class="label-text">Sort By</span>
		<Svelecte
			bind:value={$tableState.sortBy}
			name="sort-by"
			placeholder={'Select column'}
			searchable={false}
			options={sortByOptions}
			on:change={handleSortByChanged}
			style={$pageWidth.isMobileDisplay ? 'flex: 0 0 134px' : ''}
		/>
	</div>
</label>

<style lang="postcss">
</style>
