<script lang="ts">
	import CodeViewer from '$lib/components/CodeViewer.svelte';
	import ContentSelectorTabs from '$lib/components/ContentSelector/ContentSelectorTabs.svelte';
	import TableSettingsForm from '$lib/components/TableSettingsForm/TableSettingsForm.svelte';
	import { active } from '$lib/stores/activeContent';
	import type { ColumnSettings, TableState } from '@a-luna/svelte-simple-tables/types';

	type T = $$Generic;

	export let columnSettings: ColumnSettings<T>[];
	export let tableState: TableState;
	export let code: string;

	$: showCopyButton = $active !== 'settings';
</script>

<ContentSelectorTabs on:copyCode />
<div class:copy-button-shown={showCopyButton} class="tab-content border-solid border-2 mb-4">
	{#if !showCopyButton}
		<TableSettingsForm {columnSettings} bind:tableState />
	{:else}
		<CodeViewer {code} />
	{/if}
</div>

<style lang="postcss">
	.tab-content {
		background-color: var(--black4);
		border-top-left-radius: 0;
		border-top-right-radius: 16px;
		border-bottom-left-radius: 16px;
		border-bottom-right-radius: 16px;
		border-color: hsla(var(--p) / 1);
	}

	.tab-content.copy-button-shown {
		border-top-left-radius: 16px;
		border-top-right-radius: 0;
		border-bottom-left-radius: 16px;
		border-bottom-right-radius: 16px;
		border-color: hsla(var(--a) / 1);
	}
</style>
