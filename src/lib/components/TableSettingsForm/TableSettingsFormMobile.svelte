<script lang="ts">
	import FullWidthCheckbox from '$lib/components/TableSettingsForm/Checkboxes/FullWidthCheckbox.svelte';
	import PaginatedCheckbox from '$lib/components/TableSettingsForm/Checkboxes/PaginatedCheckbox.svelte';
	import ShowHeaderCheckbox from '$lib/components/TableSettingsForm/Checkboxes/ShowHeaderCheckbox.svelte';
	import ShowSortDescriptionCheckbox from '$lib/components/TableSettingsForm/Checkboxes/ShowSortDescriptionCheckbox.svelte';
	import TableWrapperCheckbox from '$lib/components/TableSettingsForm/Checkboxes/TableWrapperCheckbox.svelte';
	import SortDirectionSelector from '$lib/components/TableSettingsForm/RadioButtons/SortDirectionSelector.svelte';
	import PageNavFormatSelector from '$lib/components/TableSettingsForm/Selectors/PageNavFormatSelector.svelte';
	import PageRangeFormatSelector from '$lib/components/TableSettingsForm/Selectors/PageRangeFormatSelector.svelte';
	import PageSizeSelector from '$lib/components/TableSettingsForm/Selectors/PageSizeSelector.svelte';
	import SortByColumnSelector from '$lib/components/TableSettingsForm/Selectors/SortByColumnSelector.svelte';
	import ThemeSelector from '$lib/components/TableSettingsForm/Selectors/ThemeSelector.svelte';
	import RowTypeTextField from '$lib/components/TableSettingsForm/TextFields/RowTypeTextField.svelte';
	import TableHeaderTextField from '$lib/components/TableSettingsForm/TextFields/TableHeaderTextField.svelte';
	import type { ColumnSettings, TableState } from '@a-luna/svelte-simple-tables/types';
	import { quintOut } from 'svelte/easing';
	import { fly } from 'svelte/transition';

	type T = $$Generic;

	export let tableState: TableState;
	export let columnSettings: ColumnSettings<T>[];
	const flyOptions = { duration: 750, easing: quintOut, x: -200 };
</script>

<div transition:fly={flyOptions} id="settings-form" class="tab-content border-solid border-2 mb-4">
	<div class="flex flex-col flex-nowrap gap-2 p-5 mobile">
		<ThemeSelector bind:tableState />
		<TableHeaderTextField bind:tableState />
		<ShowHeaderCheckbox bind:tableState />
		<SortByColumnSelector bind:tableState {columnSettings} />
		<SortDirectionSelector bind:tableState />
		<ShowSortDescriptionCheckbox bind:tableState />
		<FullWidthCheckbox bind:tableState />
		<TableWrapperCheckbox bind:tableState />
		<PaginatedCheckbox bind:tableState />
		{#if $tableState.paginated}
			<PageSizeSelector bind:tableState />
			<PageNavFormatSelector bind:tableState />
			<PageRangeFormatSelector bind:tableState />
			<RowTypeTextField bind:tableState />
		{/if}
	</div>
</div>

<style lang="postcss">
	.tab-content {
		position: absolute;
		margin-right: auto;
		left: 0;
		right: 0;
		z-index: 10;
		background-color: var(--black4);
		border-radius: 16px;
		border-color: hsla(var(--p) / 1);
	}
</style>
