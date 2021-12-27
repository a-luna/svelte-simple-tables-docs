<script lang="ts">
	import type { TableState } from '@a-luna/svelte-simple-tables/types';
	export let tableState: TableState;
</script>

<label for="page-nav-format" class="label radio-wrapper">
	<div class="flex flex-row items-center gap-2">
		<span class="label-text">Page Nav</span>
		<div class="btn-group">
			<button
				title="Use compact layout on mobile, full layout otherwise"
				class:btn-active={$tableState.pageNavFormat === 'auto'}
				class="btn btn-xs"
				on:click={() => ($tableState.pageNavFormat = 'auto')}
			>
				auto
			</button>
			<button
				title="Always use compact layout"
				class:btn-active={$tableState.pageNavFormat === 'compact'}
				class="btn btn-xs"
				on:click={() => ($tableState.pageNavFormat = 'compact')}
			>
				compact
			</button>
			<button
				title="Always use full layout"
				class:btn-active={$tableState.pageNavFormat === 'full'}
				class="btn btn-xs"
				on:click={() => ($tableState.pageNavFormat = 'full')}
			>
				full
			</button>
		</div>
	</div>
</label>

<style lang="postcss">
</style>
