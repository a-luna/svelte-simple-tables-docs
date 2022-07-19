<script lang="ts">
	import {
		getColumnSettingsCode,
		getDataCode,
		getPitchFxTypeCode,
		getTableSettingsCode
	} from '$lib/codeExamples/CodeViewer';
	import TableTester from '$lib/components/TableTester/TableTester.svelte';
	import TableTesterMobile from '$lib/components/TableTester/TableTesterMobile.svelte';
	import { active, codeExample } from '$lib/stores/activeContent';
	import { alert } from '$lib/stores/alert';
	import { dataSet } from '$lib/stores/dataSet';
	import type { CodeExample, DataSet } from '$lib/types';
	import SimpleTable from '@a-luna/svelte-simple-tables';
	import { pageWidth } from '@a-luna/svelte-simple-tables/stores';
	import type {
		ColumnSettings,
		TableSettings,
		TableState
	} from '@a-luna/svelte-simple-tables/types';
import { getSortType } from '@a-luna/svelte-simple-tables/util';
	import RowDataViewerModal from './Modals/RowDataViewerModal.svelte';

	type T = $$Generic;

	export let title: string;
	export let data: T[];
	export let columnSettings: ColumnSettings<T>[];
	export let tableSettings: TableSettings<T>;
	export let tableState: TableState<T>;
	let rowData: T;
	let showRowDataModal = false;

	$active = 'table-settings';
	$tableState.sortType = data.length ? getSortType(data[0], $tableState.sortBy) : 'unsorted';
	$: code = getCodeExample($codeExample, $tableState, $dataSet);

	export const getCodeExample = (
		code: CodeExample,
		settings: TableSettings<T>,
		dataSet: DataSet
	): string =>
		code === 'table-component'
			? getTableSettingsCode(settings, dataSet)
			: code === 'column-settings'
			? getColumnSettingsCode(dataSet)
			: code === 'data'
			? getDataCode(dataSet)
			: code === 'pitchfx'
			? getPitchFxTypeCode()
			: '';

	async function copyCodeToClipboard() {
		if (typeof window !== 'undefined') {
			try {
				await navigator.clipboard.writeText(code);
				$alert.state = 'success';
				$alert.message = 'Successfully copied code to clipboard!';
			} catch {
				$alert.state = 'error';
				$alert.message = 'Clipboard copy operation failed :(';
			}
		}
	}

	function handleRowClicked(clickedRowData: T) {
		rowData = clickedRowData;
		showRowDataModal = true;
	}
</script>

{#if $pageWidth.current < 768}
	<TableTesterMobile
		bind:tableState
		{title}
		{columnSettings}
		{code}
		on:copyCode={() => copyCodeToClipboard()}
	/>
{:else}
	<TableTester
		bind:tableState
		{title}
		{columnSettings}
		{code}
		on:copyCode={() => copyCodeToClipboard()}
	/>
{/if}
<SimpleTable
	{data}
	{columnSettings}
	{tableSettings}
	bind:tableState
	on:rowClicked={(e) => handleRowClicked(e.detail)}
/>
<RowDataViewerModal bind:show={showRowDataModal} {rowData} />
