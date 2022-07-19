<script lang="ts">
	import { codeExample } from '$lib/stores/activeContent';
	import { dataSet } from '$lib/stores/dataSet';
	import type { CodeExample } from '$lib/types';
	import Svelecte from 'svelecte/src/Svelecte.svelte';

	let value: CodeExample = 'table-component';

	$: contentOptions = createSelectMenuItems();
	$: $codeExample = value;

	function createSelectMenuItems(): { label: string; value: CodeExample }[] {
		const menuItems: { label: string; value: CodeExample }[] = [
			{
				label: 'App.svelte',
				value: 'table-component'
			},
			{
				label: 'columnSettings.ts',
				value: 'column-settings'
			},
			{
				label: 'data.ts',
				value: 'data'
			}
		];
		if ($dataSet === 'pfx') {
			menuItems.push({ label: 'PitchFx.ts', value: 'pitchfx' });
		} else {
			menuItems.push({ label: 'VaxData.ts', value: 'vaxdata' });
		}
		return menuItems;
	}
</script>

<Svelecte
	bind:value
	name="sort-by"
	placeholder={'Select column'}
	searchable={false}
	options={contentOptions}
	style={'flex: 0 0 180px'}
/>
