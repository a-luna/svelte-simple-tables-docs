<script lang="ts">
	import { pageWidth } from '@a-luna/svelte-simple-tables/stores';
	import type { ColumnSettings, TableState } from '@a-luna/svelte-simple-tables/types';
	import FullWidthCheckbox from './Checkboxes/FullWidthCheckbox.svelte';
	import PaginatedCheckbox from './Checkboxes/PaginatedCheckbox.svelte';
	import ShowHeaderCheckbox from './Checkboxes/ShowHeaderCheckbox.svelte';
	import ShowSortDescriptionCheckbox from './Checkboxes/ShowSortDescriptionCheckbox.svelte';
	import TableWrapperCheckbox from './Checkboxes/TableWrapperCheckbox.svelte';
	import PageNavFormatSelector from './RadioButtons/PageNavFormatSelector.svelte';
	import PageRangeFormatSelector from './RadioButtons/PageRangeFormatSelector.svelte';
	import SortDirectionSelector from './RadioButtons/SortDirectionSelector.svelte';
	import PageSizeSelector from './Selectors/PageSizeSelector.svelte';
	import SortByColumnSelector from './Selectors/SortByColumnSelector.svelte';
	import ThemeSelector from './Selectors/ThemeSelector.svelte';
	import RowTypeTextField from './TextFields/RowTypeTextField.svelte';
	import TableHeaderTextField from './TextFields/TableHeaderTextField.svelte';

	type T = $$Generic;

	export let tableState: TableState;
	export let columnSettings: ColumnSettings<T>[];
</script>

{#if $pageWidth.current < 1024}
	<div id="settings-form" class="grid grid-cols-2 gap-2 p-5">
		<div class="left-col flex flex-col flex-nowrap gap-2">
			<ThemeSelector bind:tableState />
			<SortByColumnSelector bind:tableState {columnSettings} />
			<SortDirectionSelector bind:tableState />
			<ShowSortDescriptionCheckbox bind:tableState />
			<PaginatedCheckbox bind:tableState />
			{#if $tableState.paginated}
				<PageNavFormatSelector bind:tableState />
				<PageRangeFormatSelector bind:tableState />
			{/if}
		</div>
		<div class="right-col flex flex-col flex-nowrap gap-2">
			<TableHeaderTextField bind:tableState />
			<ShowHeaderCheckbox bind:tableState />
			<FullWidthCheckbox bind:tableState />
			<TableWrapperCheckbox bind:tableState />
			{#if $tableState.paginated}
				<PageSizeSelector bind:tableState />
				<RowTypeTextField bind:tableState />
			{/if}
		</div>
	</div>
{:else}
	<div id="settings-form" class="grid grid-cols-3 gap-2 p-5">
		<div class="left-col flex flex-col flex-nowrap gap-2">
			<ThemeSelector bind:tableState />
			<SortByColumnSelector bind:tableState {columnSettings} />
			<FullWidthCheckbox bind:tableState />
			<PaginatedCheckbox bind:tableState />
			{#if $tableState.paginated}
				<RowTypeTextField bind:tableState />
			{/if}
		</div>
		<div class="middle-col flex flex-col flex-nowrap gap-2">
			<TableHeaderTextField bind:tableState />
			<SortDirectionSelector bind:tableState />
			<TableWrapperCheckbox bind:tableState />
			{#if $tableState.paginated}
				<PageSizeSelector bind:tableState />
				<PageRangeFormatSelector bind:tableState />
			{/if}
		</div>
		<div class="right-col flex flex-col flex-nowrap gap-2">
			<ShowHeaderCheckbox bind:tableState />
			<ShowSortDescriptionCheckbox bind:tableState />
			<div style="height: 38px" />
			{#if $tableState.paginated}
				<PageNavFormatSelector bind:tableState />
			{/if}
		</div>
	</div>
{/if}
