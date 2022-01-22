<script lang="ts">
	import { pageWidth } from '@a-luna/svelte-simple-tables/stores';
	import type { PaginationLayout, TableState } from '@a-luna/svelte-simple-tables/types';
	import Svelecte from 'svelecte/src/Svelecte.svelte';

	export let tableState: TableState;
	export let gridRow: number = 0;
	export let gridCol: number = 0;
	export let gridColSpan: number = 1;
	const layoutOptions: PaginationLayout[] = ['auto', 'compact', 'full'];
</script>

<label
	for="page-nav-layout"
	class="label"
	style="grid-row-start: {gridRow}; grid-column-start: {gridCol}; grid-column-end: {gridCol +
		gridColSpan};"
	data-col={gridCol}
>
	<div class="flex flex-row items-center gap-3">
		<span class="label-text">Page Nav</span>
		<Svelecte
			bind:value={$tableState.pageNavFormat}
			name="page-nav-layout"
			labelAsValue={true}
			placeholder={'Select page nav format'}
			searchable={false}
			options={layoutOptions}
			style={$pageWidth.isMobileDisplay ? 'flex: 0 0 175px' : ''}
		/>
	</div>
</label>
