export const getTableSettings = (): string => `<script lang="ts">
  import SimpleTable from '@a-luna/svelte-simple-tables';
  import type { TableSettings } from '@a-luna/svelte-simple-tables/types';
  import { columnSettings } from './columnSettings';
  import { data } from './data';

  interface VaxData {
    personId: number;
    name: string;
    age: number;
    birthdate: Date;
    vaccinated: boolean;
  }

  const tableSettings: TableSettings = {
      tableId: 'vax-status-table',
      showHeader: true,
      header: 'Vax Status',
      showSortDescription: true,
      sortBy: 'age',
      sortDir: 'desc',
      tableWrapper: true,
      paginated: true,
      pageRangeFormat: 'compact',
      pageNavFormat: 'compact',
      pageSize: 10,
      pageSizeOptions: [5, 10, 15, 20, 25],
      themeName: 'darker',
      rowType: 'vax records',
  };
</script>

<SimpleTable {data} {columnSettings} {tableSettings} />
`;

export const getDataExample = (): string => `// data.ts
// contains 21 items, only showing first and last item for brevity
export const data: VaxData[] = [
  {
    personId: 1,
    name: 'Alice',
    age: 11,
    birthdate: new Date(2010, 7, 12),
    vaccinated: true,
  },
  ...
  {
    personId: 21,
    name: 'Ulysses',
    age: 85,
    birthdate: new Date(1936, 2, 12),
    vaccinated: true,
  },
];
`;

export const getColumnSettings = (): string => `
// columnSettings.ts
import type { ColumnSettings } from '@a-luna/svelte-simple-tables/types';
import type { VaxData } from './data';

export const columnSettings: ColumnSettings<VaxData>[] = [
  {
    propName: 'name',
    propType: 'string',
    tooltip: 'First Name',
    colValue: (data: VaxData): string => \`<a href="/person/\${data.personId}">\${data.name}</a>\`,
  },
  {
    propName: 'birthdate',
    propType: 'date',
    colValue: (data: VaxData): string => data.birthdate.toDateString(),
  },
  {
    propName: 'age',
    propType: 'number',
  },
  {
    propName: 'vaccinated',
    propType: 'boolean',
    headerText: 'Vax?',
    tooltip: 'Vaccination Status',
    classList: ['text-center'],
    colValue: (data: VaxData): string => (data.vaccinated ? '✅' : '❌'),
  },
  {
    propName: 'personId',
    propType: 'number',
    headerText: 'ID',
    sortable: false,
  },
];
`;

export const getColValueExample = (): string => `colValue: (data: VaxData): string =>
  \`<a href="/person/\${data.personId}">\${data.name}</a>\`
`;

export const themeCSSVariables = () => `--sst-font-size
--sst-table-wrapper-border-width
--sst-table-wrapper-border-style
--sst-table-wrapper-padding
--sst-sort-description-font-size
--sst-table-header-font-size
--sst-table-border-radius
--sst-col-header-padding
--sst-col-header-text-weight
--sst-col-header-highlight-text-weight
--sst-body-cell-padding
--sst-button-group-border-radius

--sst-table-wrapper-bg-color
--sst-table-wrapper-border-color

--sst-text-color
--sst-link-text-color
--sst-link-hover-text-color
--sst-table-outer-border-color
--sst-table-header-text-color
--sst-sort-description-text-color
--sst-page-range-description-text-color

--sst-col-header-bg-color
--sst-col-header-text-color
--sst-col-header-vert-border-color
--sst-col-header-horiz-border-color
--sst-col-header-highlight-sort-bg-color
--sst-col-header-highlight-sort-text-color
--sst-col-header-highlight-sort-vert-border-color
--sst-col-header-highlight-sort-horiz-border-color

--sst-body-even-row-bg-color
--sst-body-odd-row-bg-color
--sst-body-inner-vert-border-color
--sst-body-inner-horiz-border-color
--sst-body-highlight-sort-bg-color
--sst-body-highlight-sort-text-color
--sst-body-highlight-sort-border-color

--sst-button-text-color
--sst-button-bg-color
--sst-button-border-color

--sst-button-hover-text-color
--sst-button-hover-bg-color
--sst-button-hover-border-color

--sst-button-active-text-color
--sst-button-active-bg-color
--sst-button-active-border-color

--sst-button-disabled-text-color
--sst-button-disabled-bg-color
--sst-button-disabled-border-color

--sst-button-focus-border-color
`;
