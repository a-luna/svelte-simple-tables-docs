<script lang="ts">
	import { pageWidth } from '@a-luna/svelte-simple-tables/stores';
	import type { SortDirection, TableState } from '@a-luna/svelte-simple-tables/types';

	export let tableState: TableState;

	$: mobileStyle = $pageWidth.isMobileDisplay ? 'flex: 1 0 100%; justify-content: normal' : '';

	function handleSortDirChanged(dir: SortDirection) {
		if ($tableState.sortDir !== dir) {
			const colHeaderQuery = `#${$tableState.tableId} .sortable[data-stat-name="${$tableState.sortBy}"] .header-content`;
			document.querySelector<HTMLElement>(colHeaderQuery)?.click();
		}
	}
</script>

<label for="sort-dir" class="label radio-wrapper">
	<div class="flex flex-row items-center gap-2">
		<span class="label-text">Sort Direction</span>
		<div class="btn-group" style={mobileStyle}>
			<button
				title="Sort Ascending"
				class:btn-active={$tableState.sortDir === 'asc'}
				class="btn btn-xs"
				on:click={() => handleSortDirChanged('asc')}
			>
				asc
			</button>
			<button
				title="Sort Descending"
				class:btn-active={$tableState.sortDir === 'desc'}
				class="btn btn-xs"
				on:click={() => handleSortDirChanged('desc')}
			>
				desc
			</button>
		</div>
	</div>
</label>

<style lang="postcss">
</style>
