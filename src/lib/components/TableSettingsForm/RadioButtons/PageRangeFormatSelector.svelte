<script lang="ts">
	import type { TableState } from '@a-luna/svelte-simple-tables/types';
	export let tableState: TableState;
</script>

<label for="page-range-layout" class="label radio-wrapper">
	<div class="flex flex-row items-center gap-2">
		<span class="label-text">Page Range</span>
		<div class="btn-group">
			<button
				title="Do not show page range description"
				class:btn-active={$tableState.pageRangeFormat === 'none'}
				class="btn btn-xs"
				on:click={() => ($tableState.pageRangeFormat = 'none')}
			>
				none
			</button>
			<button
				title="Use compact description on mobile, verbose description otherwise"
				class:btn-active={$tableState.pageRangeFormat === 'auto'}
				class="btn btn-xs"
				on:click={() => ($tableState.pageRangeFormat = 'auto')}
			>
				auto
			</button>
			<button
				title="Always use compact description"
				class:btn-active={$tableState.pageRangeFormat === 'compact'}
				class="btn btn-xs"
				on:click={() => ($tableState.pageRangeFormat = 'compact')}
			>
				compact
			</button>
			<button
				title="Always use verbose description"
				class:btn-active={$tableState.pageRangeFormat === 'verbose'}
				class="btn btn-xs"
				on:click={() => ($tableState.pageRangeFormat = 'verbose')}
			>
				verbose
			</button>
		</div>
	</div>
</label>

<style lang="postcss">
</style>
