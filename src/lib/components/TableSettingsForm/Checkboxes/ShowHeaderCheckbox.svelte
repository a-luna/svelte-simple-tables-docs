<script lang="ts">
	import type { TableState } from '@a-luna/svelte-simple-tables/types';
	export let tableState: TableState;
	export let gridRow: number = 0;
	export let gridCol: number = 0;
	export let gridColSpan: number = 1;
</script>

<label
	for="show-header"
	class="cursor-pointer label checkbox-wrapper"
	style="grid-row-start: {gridRow}; grid-column-start: {gridCol}; grid-column-end: {gridCol +
		gridColSpan};"
	data-col={gridCol}
>
	<span class="label-text">Show Header</span>
	<input
		id="show-header"
		name="show-header"
		type="checkbox"
		bind:checked={$tableState.showHeader}
		class="checkbox"
	/>
</label>
