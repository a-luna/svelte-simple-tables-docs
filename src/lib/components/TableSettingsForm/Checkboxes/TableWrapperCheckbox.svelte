<script lang="ts">
	import type { TableState } from '@a-luna/svelte-simple-tables/types';
	export let tableState: TableState;
</script>

<label for="table-wrapper" class="cursor-pointer label checkbox-wrapper">
	<span class="label-text">Table Wrapper</span>
	<input
		id="table-wrapper"
		name="table-wrapper"
		type="checkbox"
		bind:checked={$tableState.tableWrapper}
		class="checkbox"
	/>
</label>

<style lang="postcss">
</style>
