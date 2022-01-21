<script lang="ts">
	import type { TableState } from '@a-luna/svelte-simple-tables/types';

	export let tableState: TableState;

	$: rowTypeNotUsed =
		$tableState.pageRangeFormat === 'none' || $tableState.pageRangeFormat === 'compact';
</script>

<label for="row-type" class="label">
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
