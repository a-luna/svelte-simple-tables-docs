<script lang="ts">
	import type { SelectMenuItem } from '$lib/types';
	import type { ColumnSettings, TableState } from '@a-luna/svelte-simple-tables/types';
	import { getDefaultColHeader } from '@a-luna/svelte-simple-tables/util';
	import Svelecte from 'svelecte/src/Svelecte.svelte';

	type T = $$Generic;

	export let tableState: TableState;
	export let columnSettings: ColumnSettings<T>[];

	$: sortByOptions = createSelectMenuItems<T>(columnSettings);

	function createSelectMenuItems<T>(columnSettings: ColumnSettings<T>[]): SelectMenuItem[] {
		const allColumns = columnSettings.map((col) => ({
			value: col.propName,
			label: col?.headerText ?? getDefaultColHeader(col.propName),
			type: col.propType,
			sortable: col?.sortable ?? true
		}));
		return allColumns.filter((col) => col.sortable);
	}

	function handleSortByChanged(sortSettings: { value: string }) {
		const { value } = sortSettings;
		if (sortByOptions.map((col) => col.value).includes(value)) {
			const colHeaderQuery = `#${$tableState.tableId} .sortable[data-stat-name="${value}"] .header-content`;
			document.querySelector<HTMLElement>(colHeaderQuery)?.click();
		}
	}
</script>

<label for="sort-by" class="label">
	<div class="flex flex-row items-center gap-3">
		<span class="label-text">Sort By</span>
		<Svelecte
			bind:value={$tableState.sortBy}
			name="sort-by"
			placeholder={'Select column'}
			searchable={false}
			options={sortByOptions}
			on:change={(e) => handleSortByChanged(e.detail)}
		/>
	</div>
</label>

<style lang="postcss">
</style>
