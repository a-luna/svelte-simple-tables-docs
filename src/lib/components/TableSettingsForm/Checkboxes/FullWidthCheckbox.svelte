<script lang="ts">
	import type { TableState } from '@a-luna/svelte-simple-tables/types';
	export let tableState: TableState;
</script>

<label for="full-width" class="cursor-pointer label checkbox-wrapper">
	<span class="label-text">Full Width</span>
	<input
		id="full-width"
		name="full-width"
		type="checkbox"
		bind:checked={$tableState.fullWidth}
		class="checkbox"
	/>
</label>

<style lang="postcss">
</style>
