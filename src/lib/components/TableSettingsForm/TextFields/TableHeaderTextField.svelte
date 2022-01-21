<script lang="ts">
	import type { TableState } from '@a-luna/svelte-simple-tables/types';

	export let tableState: TableState;
</script>

<label for="table-header" class="label">
	<div class="flex flex-row items-center w-full gap-3">
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
