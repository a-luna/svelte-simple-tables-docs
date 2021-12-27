<script lang="ts">
	import type { DataSet } from '$lib/types';
	import { pageWidth } from '@a-luna/svelte-simple-tables/stores';
	import Svelecte from 'svelecte/src/Svelecte.svelte';

	export let value: DataSet;
	const dataSets: DataSet[] = ['vax', 'pfx'];

	$: selectStyles = $pageWidth.current < 1024 ? 'flex: 1' : 'flex: 0';
</script>

<label for="select-data-set" class="label">
	<div class="flex flex-row items-center gap-3">
		<span class="label-text">Data Set</span>
		<Svelecte
			bind:value
			name="select-data-set"
			labelAsValue={true}
			placeholder={'Select data set'}
			searchable={false}
			options={dataSets}
			style={selectStyles}
		/>
	</div>
</label>
