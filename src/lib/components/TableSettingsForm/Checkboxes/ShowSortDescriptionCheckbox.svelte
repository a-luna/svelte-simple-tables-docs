<script lang="ts">
	import type { TableState } from '@a-luna/svelte-simple-tables/types';
	export let tableState: TableState;
</script>

<label for="show-sort-desc" class="cursor-pointer label checkbox-wrapper">
	<span class="label-text">Show Description</span>
	<input
		id="show-sort-desc"
		name="show-sort-desc"
		type="checkbox"
		bind:checked={$tableState.showSortDescription}
		class="checkbox"
	/>
</label>

<style lang="postcss">
</style>
