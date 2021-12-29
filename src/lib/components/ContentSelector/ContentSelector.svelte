<script lang="ts">
	import ContentSelectorDropDown from '$lib/components/ContentSelector/ContentSelectorDropDown.svelte';
	import ContentSelectorTabs from '$lib/components/ContentSelector/ContentSelectorTabs.svelte';
	import { pageWidth } from '@a-luna/svelte-simple-tables/stores';
</script>

{#if $pageWidth.current < 768}
	<ContentSelectorDropDown on:copyCode />
{:else}
	<ContentSelectorTabs on:copyCode />
{/if}

<style lang="postcss">
</style>
