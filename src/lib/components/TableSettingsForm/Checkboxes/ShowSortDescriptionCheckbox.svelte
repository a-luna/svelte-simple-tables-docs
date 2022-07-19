<script lang="ts">
	import type { TableState } from '@a-luna/svelte-simple-tables/types';

	type T = $$Generic;

	export let tableState: TableState<T>;
	export let gridRow: number = 0;
	export let gridCol: number = 0;
	export let gridColSpan: number = 1;
</script>

<label
	for="show-sort-desc"
	class="cursor-pointer label checkbox-wrapper"
	style="grid-row-start: {gridRow}; grid-column-start: {gridCol}; grid-column-end: {gridCol +
		gridColSpan};"
	data-col={gridCol}
>
	<span class="label-text">Show Description</span>
	<input
		id="show-sort-desc"
		name="show-sort-desc"
		type="checkbox"
		bind:checked={$tableState.showSortDescription}
		class="checkbox"
	/>
</label>

<style lang="postcss">
</style>
