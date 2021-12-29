<script lang="ts">
	import { pageWidth } from '@a-luna/svelte-simple-tables/stores';
	import type { PaginationLayout, TableState } from '@a-luna/svelte-simple-tables/types';
	import Svelecte from 'svelecte/src/Svelecte.svelte';

	export let tableState: TableState;
	const layoutOptions: PaginationLayout[] = ['auto', 'compact', 'full'];
</script>

<label for="page-nav-layout" class="label">
	<div class="flex flex-row items-center gap-3">
		<span class="label-text">Page Nav</span>
		<Svelecte
			bind:value={$tableState.pageNavFormat}
			name="page-nav-layout"
			labelAsValue={true}
			placeholder={'Select page nav format'}
			searchable={false}
			options={layoutOptions}
			style={$pageWidth.isMobileDisplay ? 'flex: 0 0 175px' : ''}
		/>
	</div>
</label>
