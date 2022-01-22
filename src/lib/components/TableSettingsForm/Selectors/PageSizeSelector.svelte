<script lang="ts">
	import { pageWidth } from '@a-luna/svelte-simple-tables/stores';
	import type { TableState } from '@a-luna/svelte-simple-tables/types';
	import Svelecte from 'svelecte/src/Svelecte.svelte';

	export let tableState: TableState;
	export let gridRow: number = 0;
	export let gridCol: number = 0;
	export let gridColSpan: number = 1;
	let selection: { value: number; label: string };

	$: pageSizeMenuItems = $tableState.pageSizeOptions.map((pageSize) => ({
		value: pageSize,
		label: pageSize.toString()
	}));

	function handlePageSizeChanged() {
		tableState.changePageSize(selection.value);
	}
</script>

<label
	for="page-size"
	class="label"
	style="grid-row-start: {gridRow}; grid-column-start: {gridCol}; grid-column-end: {gridCol +
		gridColSpan};"
	data-col={gridCol}
>
	<div class="flex flex-row items-center gap-3">
		<span class="label-text">Page Size</span>
		<Svelecte
			bind:value={$tableState.pageSize}
			bind:readSelection={selection}
			name="page-size"
			placeholder={'Select page size'}
			searchable={false}
			options={pageSizeMenuItems}
			on:change={() => handlePageSizeChanged()}
			style={$pageWidth.isMobileDisplay ? 'flex: 0 0 175px' : ''}
		/>
	</div>
</label>

<style lang="postcss">
</style>
