import type { DataSet } from '$lib/types';
import type { TableSettings } from '@a-luna/svelte-simple-tables/types';

export const getTableSettingsCode = (settings: TableSettings, dataSet: DataSet): string =>
	settings.paginated
		? getTableSettingsCodeWithPagination(settings, dataSet)
		: getTableSettingsCodeNoPagination(settings, dataSet);

const getTableSettingsCodeWithPagination = (settings: TableSettings, dataSet: DataSet): string =>
	`<script lang="ts">
\timport SimpleTable from '@a-luna/svelte-simple-tables';
\timport type { TableSettings } from '@a-luna/svelte-simple-tables/types';
\timport { columnSettings } from './columnSettings';
\timport { data } from './data';

\tconst tableSettings: TableSettings = {
\t\ttableId: '${settings.tableId}',
\t\tshowHeader: ${settings.showHeader},
\t\theader: '${settings.header}',
\t\tshowSortDescription: ${settings.showSortDescription},
\t\tsortBy: '${settings.sortBy}',
\t\tsortType: '${settings.sortType}',
\t\tsortDir: '${settings.sortDir}',
\t\ttableWrapper: ${settings.tableWrapper},
\t\tthemeName: '${settings.themeName}',
\t\tclickableRows: '${settings.clickableRows}',
\t\tanimateSorting: '${settings.animateSorting}',
\t\tpaginated: ${settings.paginated},
\t\tpageSize: ${settings.pageSize},
\t\tpageSizeOptions: [${settings.pageSizeOptions}],                                                                                                                                                                                                                                                                                                                             
\t\tpageRangeFormat: '${settings.pageRangeFormat}',
\t\tpageNavFormat: '${settings.pageNavFormat}',
\t\trowType: '${settings.rowType}'
\t};
</script>

<SimpleTable {data} {columnSettings} {tableSettings} />
`;

const getTableSettingsCodeNoPagination = (settings: TableSettings, dataSet: DataSet): string =>
	`
<script lang="ts">
\timport SimpleTable from '@a-luna/svelte-simple-tables';
\timport type { TableSettings } from '@a-luna/svelte-simple-tables/types';
\timport { columnSettings } from './columnSettings';
\timport { data } from './data';

\tconst tableSettings: TableSettings = {
\t\ttableId: '${settings.tableId}',
\t\tshowHeader: ${settings.showHeader},
\t\theader: '${settings.header}',
\t\tshowSortDescription: ${settings.showSortDescription},
\t\tsortBy: '${settings.sortBy}',
\t\tsortType: '${settings.sortType}',
\t\tsortDir: '${settings.sortDir}',
\t\ttableWrapper: ${settings.tableWrapper},
\t\tclickableRows: ${settings.clickableRows},
\t\tanimateSorting: ${settings.animateSorting}, 
\t\tthemeName: '${settings.themeName}',
\t\tpaginated: ${settings.paginated}
\t};
</script>

<SimpleTable {data} {columnSettings} {tableSettings} />
`;
