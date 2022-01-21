<script lang="ts">
	import FullWidthCheckbox from '$lib/components/TableSettingsForm/Checkboxes/FullWidthCheckbox.svelte';
	import PaginatedCheckbox from '$lib/components/TableSettingsForm/Checkboxes/PaginatedCheckbox.svelte';
	import ShowHeaderCheckbox from '$lib/components/TableSettingsForm/Checkboxes/ShowHeaderCheckbox.svelte';
	import ShowSortDescriptionCheckbox from '$lib/components/TableSettingsForm/Checkboxes/ShowSortDescriptionCheckbox.svelte';
	import TableWrapperCheckbox from '$lib/components/TableSettingsForm/Checkboxes/TableWrapperCheckbox.svelte';
	import PageNavFormatSelector from '$lib/components/TableSettingsForm/RadioButtons/PageNavFormatSelector.svelte';
	import PageRangeFormatSelector from '$lib/components/TableSettingsForm/RadioButtons/PageRangeFormatSelector.svelte';
	import SortDirectionSelector from '$lib/components/TableSettingsForm/RadioButtons/SortDirectionSelector.svelte';
	import PageSizeSelector from '$lib/components/TableSettingsForm/Selectors/PageSizeSelector.svelte';
	import SortByColumnSelector from '$lib/components/TableSettingsForm/Selectors/SortByColumnSelector.svelte';
	import ThemeSelector from '$lib/components/TableSettingsForm/Selectors/ThemeSelector.svelte';
	import RowTypeTextField from '$lib/components/TableSettingsForm/TextFields/RowTypeTextField.svelte';
	import TableHeaderTextField from '$lib/components/TableSettingsForm/TextFields/TableHeaderTextField.svelte';
	import { pageWidth } from '@a-luna/svelte-simple-tables/stores';
	import type { ColumnSettings, TableState } from '@a-luna/svelte-simple-tables/types';
	import AnimateSortingCheckbox from './Checkboxes/AnimateSortingCheckbox.svelte';
	import ClickableRowsCheckbox from './Checkboxes/ClickableRowsCheckbox.svelte';

	type T = $$Generic;

	export let tableState: TableState;
	export let columnSettings: ColumnSettings<T>[];
</script>

{#if $pageWidth.current < 1024}
	<div id="settings-form" class="flex flex-row flex-nowrap justify-start gap-4 p-5">
		<div class="left-col flex flex-col flex-nowrap gap-2">
			<ThemeSelector bind:tableState />
			<TableHeaderTextField bind:tableState />
			<ShowHeaderCheckbox bind:tableState />
			<ShowSortDescriptionCheckbox bind:tableState />
			<FullWidthCheckbox bind:tableState />
			<PaginatedCheckbox bind:tableState />
			{#if $tableState.paginated}
				<PageNavFormatSelector bind:tableState />
				<PageRangeFormatSelector bind:tableState />
			{/if}
		</div>
		<div class="right-col flex flex-col flex-nowrap gap-2">
			<SortByColumnSelector bind:tableState {columnSettings} />
			<SortDirectionSelector bind:tableState />
			<AnimateSortingCheckbox bind:tableState />
			<ClickableRowsCheckbox bind:tableState />
			<TableWrapperCheckbox bind:tableState />
			<div style="height: 38px" />
			{#if $tableState.paginated}
				<PageSizeSelector bind:tableState />
				<RowTypeTextField bind:tableState />
			{/if}
		</div>
	</div>
{:else}
	<div id="settings-form" class="grid grid-cols-3 gap-3 p-5">
		<div class="left-col flex flex-col flex-nowrap gap-2">
			<ThemeSelector bind:tableState />
			<TableHeaderTextField bind:tableState />
			<SortByColumnSelector bind:tableState {columnSettings} />
			<ClickableRowsCheckbox bind:tableState />
			<PaginatedCheckbox bind:tableState />
			{#if $tableState.paginated}
				<RowTypeTextField bind:tableState />
			{/if}
		</div>
		<div class="middle-col flex flex-col flex-nowrap gap-2">
			<div style="height: 38px" />
			<ShowHeaderCheckbox bind:tableState />
			<SortDirectionSelector bind:tableState />
			<FullWidthCheckbox bind:tableState />
			{#if $tableState.paginated}
				<PageSizeSelector bind:tableState />
				<PageRangeFormatSelector bind:tableState />
			{/if}
		</div>
		<div class="right-col flex flex-col flex-nowrap gap-2">
			<div style="height: 38px" />
			<ShowSortDescriptionCheckbox bind:tableState />
			<AnimateSortingCheckbox bind:tableState />
			<TableWrapperCheckbox bind:tableState />
			{#if $tableState.paginated}
				<PageNavFormatSelector bind:tableState />
			{/if}
		</div>
	</div>
{/if}
