<script lang="ts">
	import { pageWidth } from '@a-luna/svelte-simple-tables/stores';
	import type { PageRangeFormat, TableState } from '@a-luna/svelte-simple-tables/types';
	import Svelecte from 'svelecte/src/Svelecte.svelte';

	export let tableState: TableState;
	const pageRangeOptions: PageRangeFormat[] = ['none', 'auto', 'compact', 'verbose'];
</script>

<label for="page-range-layout" class="label">
	<div class="flex flex-row items-center gap-3">
		<span class="label-text">Page Range</span>
		<Svelecte
			bind:value={$tableState.pageRangeFormat}
			name="page-tange-layout"
			labelAsValue={true}
			placeholder={'Select page range format'}
			searchable={false}
			options={pageRangeOptions}
			style={$pageWidth.isMobileDisplay ? 'flex: 0 0 175px' : ''}
		/>
	</div>
</label>
