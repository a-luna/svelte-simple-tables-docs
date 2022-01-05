<script lang="ts">
	import {
		getColumnSettingsCode,
		getDataCode,
		getPitchFxTypeCode,
		getTableSettingsCode
	} from '$lib/codeExamples/CodeViewer';
	import TableTester from '$lib/components/TableTester/TableTester.svelte';
	import TableTesterMobile from '$lib/components/TableTester/TableTesterMobile.svelte';
	import { active } from '$lib/stores/activeContent';
	import { alert } from '$lib/stores/alert';
	import { dataSet } from '$lib/stores/dataSet';
	import type { CodeViewerContent, DataSet } from '$lib/types';
	import SimpleTable from '@a-luna/svelte-simple-tables';
	import { pageWidth } from '@a-luna/svelte-simple-tables/stores';
	import type {
		ColumnSettings,
		TableSettings,
		TableState
	} from '@a-luna/svelte-simple-tables/types';

	type T = $$Generic;

	export let title: string;
	export let data: T[];
	export let columnSettings: ColumnSettings<T>[];
	export let tableSettings: TableSettings;
	export let tableState: TableState;

	$tableState.sortType = columnSettings.find((c) => c.propName === $tableState.sortBy).propType;
	$: code = getCodeExample($active, $tableState, $dataSet);

	export const getCodeExample = (
		content: CodeViewerContent,
		settings: TableSettings,
		dataSet: DataSet
	): string =>
		content === 'svelte-component'
			? getTableSettingsCode(settings, dataSet)
			: content === 'column-settings'
			? getColumnSettingsCode(dataSet)
			: content === 'data'
			? getDataCode(dataSet)
			: content === 'pitchfx'
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
	<TableTester bind:tableState {title} {columnSettings} {code} on:copyCode={() => copyCodeToClipboard()} />
{/if}
<SimpleTable {data} {columnSettings} {tableSettings} bind:tableState />

