<script lang="ts">
	import type { TableState } from '@a-luna/svelte-simple-tables/types';
	export let tableState: TableState;

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

<label for="paginated" class="cursor-pointer label checkbox-wrapper">
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
