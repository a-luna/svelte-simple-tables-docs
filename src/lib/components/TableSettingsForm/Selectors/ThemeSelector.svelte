<script lang="ts">
	import { pageWidth } from '@a-luna/svelte-simple-tables/stores';
	import type { TableState, TableTheme } from '@a-luna/svelte-simple-tables/types';
	import Svelecte, { addFormatter } from 'svelecte/src/Svelecte.svelte';

	type T = $$Generic;

	export let tableState: TableState<T>;
	export let gridRow: number = 0;
	export let gridCol: number = 0;
	export let gridColSpan: number = 1;
	const themes: TableTheme[] = ['light', 'lighter', 'dark', 'darker'];
	const itemStyles =
		'display: inline-flex; align-self: center; position: relative; top: 2px; height: 1em; width: 1em; border: 1px solid #000000; margin-right: 0.4em';

	function themeRenderer(item, isSelected) {
		const themeColorMap = {
			light: 'hsl(113, 100%, 70%)',
			lighter: 'hsl(0, 0%, 100%)',
			dark: 'hsl(251, 74%, 30%)',
			darker: 'hsl(220, 13%, 3%)'
		};
		return `<span class="theme-item" style="background-color: ${
			themeColorMap[item.label]
		}; ${itemStyles}"></span>${item.label}`;
	}

	addFormatter('theme-items', themeRenderer);
</script>

<label
	for="select-theme"
	class="label"
	style="grid-row-start: {gridRow}; grid-column-start: {gridCol}; grid-column-end: {gridCol +
		gridColSpan};"
	data-col={gridCol}
>
	<div class="flex flex-row items-center gap-3">
		<span class="label-text">Theme</span>
		<Svelecte
			bind:value={$tableState.themeName}
			name="select-theme"
			labelAsValue={true}
			placeholder={'Select theme'}
			searchable={false}
			options={themes}
			renderer="theme-items"
			style={$pageWidth.isMobileDisplay ? 'flex: 0 0 134px' : ''}
		/>
	</div>
</label>
