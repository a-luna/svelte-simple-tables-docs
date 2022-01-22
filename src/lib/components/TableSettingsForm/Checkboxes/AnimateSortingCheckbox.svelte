<script lang="ts">
	import type { TableState } from '@a-luna/svelte-simple-tables/types';
	export let tableState: TableState;
	export let gridRow: number = 0;
	export let gridCol: number = 0;
	export let gridColSpan: number = 1;
</script>

<label
	for="full-width"
	class="cursor-pointer label checkbox-wrapper"
	style="grid-row-start: {gridRow}; grid-column-start: {gridCol}; grid-column-end: {gridCol +
		gridColSpan};"
	data-col={gridCol}
>
	<span class="label-text">Animate Sorting</span>
	<input
		id="full-width"
		name="full-width"
		type="checkbox"
		bind:checked={$tableState.animateSorting}
		class="checkbox"
	/>
</label>
