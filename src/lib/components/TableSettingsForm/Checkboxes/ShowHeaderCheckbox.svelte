<script lang="ts">
	import type { TableState } from '@a-luna/svelte-simple-tables/types';
	export let tableState: TableState;
</script>

<label for="show-header" class="cursor-pointer label checkbox-wrapper">
	<span class="label-text">Show Header</span>
	<input
		id="show-header"
		name="show-header"
		type="checkbox"
		bind:checked={$tableState.showHeader}
		class="checkbox"
	/>
</label>
