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

<div class="breadcrumbs mb-4">
	<a href="/">Home</a> <span class="arrow">&gt;</span> <span class="current">{title}</span>
</div>
{#if $pageWidth.current < 768}
	<TableTesterMobile
		bind:tableState
		{columnSettings}
		{code}
		on:copyCode={() => copyCodeToClipboard()}
	/>
{:else}
	<TableTester bind:tableState {columnSettings} {code} on:copyCode={() => copyCodeToClipboard()} />
{/if}
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
</style>
