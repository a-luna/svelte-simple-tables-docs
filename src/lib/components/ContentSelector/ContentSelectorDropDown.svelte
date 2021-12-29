<script lang="ts">
	import { active } from '$lib/stores/activeContent';
	import { dataSet } from '$lib/stores/dataSet';
	import type { CodeViewerContent } from '$lib/types';
	import Svelecte from 'svelecte/src/Svelecte.svelte';

	let value: CodeViewerContent = 'svelte-component';

	$: contentOptions = createSelectMenuItems();
	$: $active = value;

	function createSelectMenuItems(): { label: string; value: CodeViewerContent }[] {
		const menuItems: { label: string; value: CodeViewerContent }[] = [
			{
				label: 'App.svelte',
				value: 'svelte-component'
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

<style lang="postcss">
</style>
