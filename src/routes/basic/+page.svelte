<script lang="ts">
	import ExampleTable from '$lib/components/ExampleTable.svelte';
	import { darkerThemeCssVariables } from '$lib/constants';
	import { dataSet } from '$lib/stores/dataSet';
	import { createLocalStorageValue } from '$lib/stores/util';
	import { importTableTheme } from '$lib/themes';
	import type { ThemeColorPalettes } from '$lib/types';
	import { vaxDataColumnSettings } from '$lib/vax/columnSettings';
	import type { VaxData } from '$lib/vax/data';
	import { vaxData } from '$lib/vax/data';
	import { createTableStateStore } from '@a-luna/svelte-simple-tables/stores';
	import type { TableSettings } from '@a-luna/svelte-simple-tables/types';

	const vaxTableSettings: TableSettings<VaxData> = {
		tableId: 'vax-status-table',
		showHeader: true,
		header: 'Vax Status',
		showSortDescription: true,
		sortBy: 'age',
		sortDir: 'desc',
		tableWrapper: false,
		clickableRows: false,
		animateSorting: true,
		paginated: true,
		pageRangeFormat: 'compact',
		pageNavFormat: 'compact',
		pageSize: 10,
		pageSizeOptions: [5, 10, 15, 20, 25],
		themeName: 'darker',
		rowType: 'vax records'
	};
	let tableState = createTableStateStore(vaxData.length, vaxTableSettings);

	$: $dataSet = 'vax';

	const darkTheme = importTableTheme(darkerThemeCssVariables);
	const customTheme = createLocalStorageValue<ThemeColorPalettes>(
		'custom-theme',
		darkTheme.colorPalletes
	);
</script>

<ExampleTable
	title={'Basic Example'}
	data={vaxData}
	columnSettings={vaxDataColumnSettings}
	tableSettings={vaxTableSettings}
	bind:tableState
/>
