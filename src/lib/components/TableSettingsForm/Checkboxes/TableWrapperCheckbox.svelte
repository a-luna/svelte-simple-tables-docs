<script lang="ts">
	import type { TableState } from '@a-luna/svelte-simple-tables/types';
	export let tableState: TableState;
	export let gridRow: number = 0;
	export let gridCol: number = 0;
	export let gridColSpan: number = 1;
</script>

<label
	for="table-wrapper"
	class="cursor-pointer label checkbox-wrapper"
	style="grid-row-start: {gridRow}; grid-column-start: {gridCol}; grid-column-end: {gridCol +
		gridColSpan};"
	data-col={gridCol}
>
	<span class="label-text">Table Wrapper</span>
	<input
		id="table-wrapper"
		name="table-wrapper"
		type="checkbox"
		bind:checked={$tableState.tableWrapper}
		class="checkbox"
	/>
</label>

<style lang="postcss">
</style>
