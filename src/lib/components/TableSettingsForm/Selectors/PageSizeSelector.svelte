<script lang="ts">
	import { pageWidth } from '@a-luna/svelte-simple-tables/stores';
	import type { TableState } from '@a-luna/svelte-simple-tables/types';
	import Svelecte from 'svelecte/src/Svelecte.svelte';

	export let tableState: TableState;
	let selection: { value: number; label: string };

	$: pageSizeMenuItems = $tableState.pageSizeOptions.map((pageSize) => ({
		value: pageSize,
		label: pageSize.toString()
	}));

	function handlePageSizeChanged() {
		tableState.changePageSize(selection.value);
	}
</script>

<label for="page-size" class="label">
	<div class="flex flex-row items-center gap-3">
		<span class="label-text">Page Size</span>
		<Svelecte
			bind:value={$tableState.pageSize}
			bind:readSelection={selection}
			name="page-size"
			placeholder={'Select page size'}
			searchable={false}
			options={pageSizeMenuItems}
			on:change={() => handlePageSizeChanged()}
			style={$pageWidth.isMobileDisplay ? 'flex: 0 0 175px' : ''}
		/>
	</div>
</label>

<style lang="postcss">
</style>
