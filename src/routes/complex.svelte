<script lang="ts">
	import TableTester from '$lib/components/TableTester.svelte';
	import { pfxDataColumnSettings } from '$lib/pfx/columnSettings';
	import { pfxData } from '$lib/pfx/data';
	import { dataSet } from '$lib/stores/dataSet';
	import { createTableStateStore } from '@a-luna/svelte-simple-tables/stores';
	import type { TableSettings } from '@a-luna/svelte-simple-tables/types';

	const pfxTableSettings: TableSettings = {
		tableId: 'pfx',
		showHeader: true,
		header: 'Barrels',
		showSortDescription: true,
		fullWidth: false,
		sortBy: 'launch_speed',
		sortDir: 'desc',
		tableWrapper: true,
		themeName: 'light',
		paginated: false,
		pageSize: 10,
		pageSizeOptions: [5, 10, 15, 20, 25],
		pageRangeFormat: 'auto',
		pageNavFormat: 'auto',
		rowType: 'barrels'
	};

	let tableState = createTableStateStore(pfxData.length, pfxTableSettings);

	$: $dataSet = 'pfx';
</script>

<TableTester
	title={'Complex Example'}
	data={pfxData}
	columnSettings={pfxDataColumnSettings}
	tableSettings={pfxTableSettings}
	bind:tableState
/>
