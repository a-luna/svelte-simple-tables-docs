<script lang="ts">
	import type { TableState } from '@a-luna/svelte-simple-tables/types';

	export let tableState: TableState;
	export let gridRow: number = 0;
	export let gridCol: number = 0;
	export let gridColSpan: number = 1;

	$: rowTypeNotUsed =
		$tableState.pageRangeFormat === 'none' || $tableState.pageRangeFormat === 'compact';
</script>

<label
	for="row-type"
	class="label"
	style="grid-row-start: {gridRow}; grid-column-start: {gridCol}; grid-column-end: {gridCol +
		gridColSpan};"
	data-col={gridCol}
>
	<div class="flex flex-row items-center w-full gap-3">
		<span class="label-text">Row Type</span>
		<input
			bind:value={$tableState.rowType}
			name="row-type"
			id="row-type"
			type="text"
			disabled={rowTypeNotUsed}
			placeholder={'enter row type'}
			class="input input-bordered"
		/>
	</div>
</label>

<style lang="postcss">
</style>
