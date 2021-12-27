<script lang="ts">
	import type { TableState } from '@a-luna/svelte-simple-tables/types';

	export let tableState: TableState;
	let savedHeaderValue: string = $tableState?.header ?? '';

	// $: if ($tableState.showHeader) {
	// 	$tableState.header = savedHeaderValue;
	// }
	// $: if (!$tableState.showHeader && typeof window !== 'undefined') {
	// 	const headerInput = document.getElementById('table-header') as HTMLInputElement;
	// 	savedHeaderValue = headerInput.value;
	// 	$tableState.header = '';
	// }
</script>

<label for="table-header" class="label">
	<div class="flex flex-row items-center gap-3">
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

<style lang="postcss">
</style>
