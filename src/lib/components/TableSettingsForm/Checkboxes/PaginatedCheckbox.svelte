<script lang="ts">
	import type { TableState } from '@a-luna/svelte-simple-tables/types';
	export let tableState: TableState;
	export let gridRow: number = 0;
	export let gridCol: number = 0;
	export let gridColSpan: number = 1;

	let savedPageSize: number = savePageSize();

	function savePageSize() {
		const pageSize = $tableState.pageSize;
		return pageSize && $tableState.pageSizeOptions.includes(pageSize)
			? pageSize
			: $tableState.pageSizeOptions[0];
	}

	function togglePagination() {
		if ($tableState.paginated) {
			$tableState.pageSize = savedPageSize;
		} else {
			savedPageSize = savePageSize();
			$tableState.pageSize = $tableState.pagination.totalRows;
		}
		$tableState.pagination = {
			totalRows: $tableState.pagination.totalRows,
			totalPages: Math.ceil($tableState.pagination.totalRows / $tableState.pageSize),
			currentPage: 1,
			startRow: 0,
			endRow: Math.min($tableState.pageSize, $tableState.pagination.totalRows)
		};
		$tableState.state.syncState = 'finished-sort-table';
	}
</script>

<label
	for="paginated"
	class="cursor-pointer label checkbox-wrapper"
	style="grid-row-start: {gridRow}; grid-column-start: {gridCol}; grid-column-end: {gridCol +
		gridColSpan};"
	data-col={gridCol}
>
	<span class="label-text">Paginated</span>
	<input
		id="paginated"
		name="paginated"
		type="checkbox"
		class="checkbox"
		bind:checked={$tableState.paginated}
		on:change={() => togglePagination()}
	/>
</label>

<style lang="postcss">
</style>
