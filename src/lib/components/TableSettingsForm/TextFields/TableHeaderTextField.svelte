<script lang="ts">
	import type { TableState } from '@a-luna/svelte-simple-tables/types';

	export let tableState: TableState;
	export let gridRow: number = 0;
	export let gridCol: number = 0;
	export let gridColSpan: number = 1;
</script>

<label
	for="table-header"
	class="label"
	style="grid-row-start: {gridRow}; grid-column-start: {gridCol}; grid-column-end: {gridCol +
		gridColSpan};"
	data-col={gridCol}
>
	<div class="flex flex-row items-center w-full gap-3">
		<span class="label-text">Table Header</span>
		<input
			bind:value={$tableState.header}
			disabled={!$tableState.showHeader}
			name="table-header"
			id="table-header"
			type="text"
			placeholder={$tableState.showHeader ? 'enter table header' : 'disabled'}
			class="input input-bordered"
		/>
	</div>
</label>
