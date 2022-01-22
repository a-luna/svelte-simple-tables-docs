<script lang="ts">
	import { pageWidth } from '@a-luna/svelte-simple-tables/stores';
	import type { PageRangeFormat, TableState } from '@a-luna/svelte-simple-tables/types';
	import Svelecte from 'svelecte/src/Svelecte.svelte';

	export let tableState: TableState;
	export let gridRow: number = 0;
	export let gridCol: number = 0;
	export let gridColSpan: number = 1;
	const pageRangeOptions: PageRangeFormat[] = ['none', 'auto', 'compact', 'verbose'];
</script>

<label
	for="page-range-layout"
	class="label"
	style="grid-row-start: {gridRow}; grid-column-start: {gridCol}; grid-column-end: {gridCol +
		gridColSpan};"
	data-col={gridCol}
>
	<div class="flex flex-row items-center gap-3">
		<span class="label-text">Page Range</span>
		<Svelecte
			bind:value={$tableState.pageRangeFormat}
			name="page-tange-layout"
			labelAsValue={true}
			placeholder={'Select page range format'}
			searchable={false}
			options={pageRangeOptions}
			style={$pageWidth.isMobileDisplay ? 'flex: 0 0 175px' : ''}
		/>
	</div>
</label>
