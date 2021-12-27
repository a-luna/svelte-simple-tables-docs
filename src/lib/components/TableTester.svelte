<script lang="ts">
	import {
		getColumnSettingsCode,
		getDataCode,
		getPitchFxTypeCode,
		getTableSettingsCode
	} from '$lib/codeExamples/CodeViewer';
	import { alert } from '$lib/stores/alert';
	import { dataSet } from '$lib/stores/dataSet';
	import type { CodeViewerContent, DataSet } from '$lib/types';
	import SimpleTable from '@a-luna/svelte-simple-tables';
	import type {
		ColumnSettings,
		TableSettings,
		TableState
	} from '@a-luna/svelte-simple-tables/types';
	import CodeViewer from './CodeViewer.svelte';
	import ContentSelector from './ContentSelector.svelte';
	import TableSettingsForm from './TableSettingsForm/TableSettingsForm.svelte';

	type T = $$Generic;

	export let title: string;
	export let data: T[];
	export let columnSettings: ColumnSettings<T>[];
	export let tableSettings: TableSettings;
	export let tableState: TableState;
	let active: CodeViewerContent = 'settings';

	$tableState.sortType = columnSettings.find((c) => c.propName === $tableState.sortBy).propType;
	$: showCopyButton = active !== 'settings';
	$: code = getCodeExample(active, $tableState, $dataSet);

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

<div class="breadcrumbs mb-4">
	<a href="/">Home</a> <span class="arrow">&gt;</span> <span class="current">{title}</span>
</div>
<ContentSelector bind:active on:copyCode={() => copyCodeToClipboard()} />
<div class:copy-button-shown={showCopyButton} class="tab-content border-solid border-2 mb-4">
	{#if active === 'settings'}
		<TableSettingsForm {columnSettings} bind:tableState />
	{:else}
		<CodeViewer {code} {active} />
	{/if}
</div>
<SimpleTable {data} {columnSettings} {tableSettings} bind:tableState />

<style lang="postcss">
	.breadcrumbs {
		font-size: 1.5rem;
		padding: 1rem 0;
	}

	.breadcrumbs > * {
		margin-right: 0.5rem;
	}

	.breadcrumbs a,
	.breadcrumbs a:visited {
		color: var(--white4);
		box-shadow: inset 0 -2px 0 var(--indigo3);
		text-decoration: none;
	}

	.breadcrumbs a:hover,
	.breadcrumbs a:active,
	.breadcrumbs a:focus {
		color: var(--white41);
		background-color: var(--indigo3);
		text-decoration: none;
		padding-top: 2px;
		padding-bottom: 0;
		border-bottom: none;
		transition: background-color, color 350ms ease-out;
		box-shadow: none;
	}

	.breadcrumbs a:hover,
	.breadcrumbs a:active {
		outline: 0;
	}

	.breadcrumbs .arrow {
		color: var(--light-gray2);
	}

	.breadcrumbs .current {
		color: var(--white4);
	}

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
