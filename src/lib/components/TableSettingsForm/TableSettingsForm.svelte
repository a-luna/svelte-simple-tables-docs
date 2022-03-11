<script lang="ts">
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

	$: gridColumns = $pageWidth.current < 1024 ? 2 : 3;
	$: gridRows = $pageWidth.current < 1024 ? 8 : 6;
</script>

<div
	id="settings-form"
	style="display: grid; grid-template-columns: repeat({gridColumns}, auto); grid-template-rows: repeat({gridRows}, auto);  gap: 0.75rem 1rem;"
>
	<ThemeSelector
		bind:tableState
		gridRow={$pageWidth.current < 1024 ? 1 : 1}
		gridCol={$pageWidth.current < 1024 ? 1 : 1}
	/>
	<TableHeaderTextField
		bind:tableState
		gridRow={$pageWidth.current < 1024 ? 2 : 2}
		gridCol={$pageWidth.current < 1024 ? 1 : 1}
	/>
	<SortByColumnSelector
		bind:tableState
		{columnSettings}
		gridRow={$pageWidth.current < 1024 ? 1 : 3}
		gridCol={$pageWidth.current < 1024 ? 2 : 1}
	/>
	<ClickableRowsCheckbox
		bind:tableState
		gridRow={$pageWidth.current < 1024 ? 4 : 4}
		gridCol={$pageWidth.current < 1024 ? 2 : 1}
	/>
	<ShowHeaderCheckbox
		bind:tableState
		gridRow={$pageWidth.current < 1024 ? 3 : 2}
		gridCol={$pageWidth.current < 1024 ? 1 : 2}
	/>
	<SortDirectionSelector
		bind:tableState
		gridRow={$pageWidth.current < 1024 ? 2 : 3}
		gridCol={$pageWidth.current < 1024 ? 2 : 2}
	/>
	<ShowSortDescriptionCheckbox
		bind:tableState
		gridRow={$pageWidth.current < 1024 ? 4 : 2}
		gridCol={$pageWidth.current < 1024 ? 1 : 3}
	/>
	<AnimateSortingCheckbox
		bind:tableState
		gridRow={$pageWidth.current < 1024 ? 3 : 3}
		gridCol={$pageWidth.current < 1024 ? 2 : 3}
	/>
	<TableWrapperCheckbox
		bind:tableState
		gridRow={$pageWidth.current < 1024 ? 5 : 4}
		gridCol={$pageWidth.current < 1024 ? 1 : 2}
	/>
	<PaginatedCheckbox
		bind:tableState
		gridRow={$pageWidth.current < 1024 ? 6 : 5}
		gridCol={$pageWidth.current < 1024 ? 1 : 1}
	/>

	{#if $tableState.paginated}
		<RowTypeTextField
			bind:tableState
			gridRow={$pageWidth.current < 1024 ? 8 : 6}
			gridCol={$pageWidth.current < 1024 ? 2 : 1}
		/>
		<PageSizeSelector
			bind:tableState
			gridRow={$pageWidth.current < 1024 ? 7 : 5}
			gridCol={$pageWidth.current < 1024 ? 2 : 2}
		/>
		<PageRangeFormatSelector
			bind:tableState
			gridRow={$pageWidth.current < 1024 ? 8 : 6}
			gridCol={$pageWidth.current < 1024 ? 1 : 2}
			gridColSpan={$pageWidth.current < 1024 ? 1 : 2}
		/>
		<PageNavFormatSelector
			bind:tableState
			gridRow={$pageWidth.current < 1024 ? 7 : 5}
			gridCol={$pageWidth.current < 1024 ? 1 : 3}
		/>
	{/if}
</div>

<style lang="postcss">
	#settings-form {
		padding: 1.25rem;
	}
</style>
