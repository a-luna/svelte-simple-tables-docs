import type { DataSet } from '$lib/types';
import type { TableSettings } from '@a-luna/svelte-simple-tables/types';

const getDataTypeName = (dataSet: DataSet): string => (dataSet === 'pfx' ? 'PitchFX' : 'VaxData');

export function getTableSettingsCode<T>(settings: TableSettings<T>, dataSet: DataSet): string {
	return settings.paginated
		? getTableSettingsCodeWithPagination(settings, dataSet)
		: getTableSettingsCodeNoPagination(settings, dataSet);
}

function getTableSettingsCodeWithPagination<T>(
	settings: TableSettings<T>,
	dataSet: DataSet
): string {
	return `<script lang="ts">
	\timport SimpleTable from '@a-luna/svelte-simple-tables';
	\timport type { TableSettings } from '@a-luna/svelte-simple-tables/types';
	\timport { columnSettings } from './columnSettings';
	\timport type { ${getDataTypeName(dataSet)} } from './${getDataTypeName(dataSet)}';
	\timport { data } from './data';
	
	\tconst tableSettings: TableSettings<${getDataTypeName(dataSet)}> = {
	\t\ttableId: '${settings.tableId}',
	\t\tthemeName: '${settings.themeName}',
	\t\tshowHeader: ${settings.showHeader},
	\t\theader: '${settings.header}',
	\t\tshowSortDescription: ${settings.showSortDescription},
	\t\tsortBy: '${String(settings.sortBy)}',
	\t\tsortType: '${settings.sortType}',
	\t\tsortDir: '${settings.sortDir}',
	\t\ttableWrapper: ${settings.tableWrapper},
	\t\tclickableRows: '${settings.clickableRows}',
	\t\tanimateSorting: '${settings.animateSorting}',
	\t\tpaginated: ${settings.paginated},
	\t\tpageSize: ${settings.pageSize},
	\t\tpageSizeOptions: [${
		settings.pageSizeOptions
	}],                                                                                                                                                                                                                                                                                                                             
	\t\tpageRangeFormat: '${settings.pageRangeFormat}',
	\t\tpageNavFormat: '${settings.pageNavFormat}',
	\t\trowType: '${settings.rowType}'
	\t};
	</script>
	
	<SimpleTable {data} {columnSettings} {tableSettings} />
	`;
}

function getTableSettingsCodeNoPagination<T>(settings: TableSettings<T>, dataSet: DataSet): string {
	return `
	<script lang="ts">
	\timport SimpleTable from '@a-luna/svelte-simple-tables';
	\timport type { TableSettings } from '@a-luna/svelte-simple-tables/types';
	\timport { columnSettings } from './columnSettings';
	\timport type { ${getDataTypeName(dataSet)} } from './${getDataTypeName(dataSet)}';
	\timport { data } from './data';
	
	\tconst tableSettings: TableSettings<${getDataTypeName(dataSet)}> = {
	\t\ttableId: '${settings.tableId}', 
	\t\tthemeName: '${settings.themeName}',
	\t\tshowHeader: ${settings.showHeader},
	\t\theader: '${settings.header}',
	\t\tshowSortDescription: ${settings.showSortDescription},
	\t\tsortBy: '${String(settings.sortBy)}',
	\t\tsortType: '${settings.sortType}',
	\t\tsortDir: '${settings.sortDir}',
	\t\ttableWrapper: ${settings.tableWrapper},
	\t\tclickableRows: ${settings.clickableRows},
	\t\tanimateSorting: ${settings.animateSorting},
	\t\tpaginated: ${settings.paginated}
	\t};
	</script>
	
	<SimpleTable {data} {columnSettings} {tableSettings} />
	`;
}
