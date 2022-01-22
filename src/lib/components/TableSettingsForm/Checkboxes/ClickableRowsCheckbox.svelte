<script lang="ts">
	import QuestionMarkButton from '$lib/components/Buttons/QuestionMarkButton.svelte';
	import { pageWidth } from '@a-luna/svelte-simple-tables/stores';
	import type { TableState } from '@a-luna/svelte-simple-tables/types';
	import { fade } from 'svelte/transition';

	export let tableState: TableState;
	export let gridRow: number = 0;
	export let gridCol: number = 0;
	export let gridColSpan: number = 1;
	let showMessage = false;

	$: defaultPosition = 'left: 40px; top: 175px;';
	$: mediumPosition = 'top: 0.35; right: 40px;';
	$: largePosition = 'top: 240px;';
	$: messagePosition = $pageWidth.isMobileDisplay
		? defaultPosition
		: $pageWidth.isMedium
		? mediumPosition
		: largePosition;

	function toggleMessage() {
		showMessage = !showMessage;
	}
</script>

<svelte:window on:click={() => (showMessage = false)} />

<label
	for="full-width"
	class="cursor-pointer label checkbox-wrapper"
	style="grid-row-start: {gridRow}; grid-column-start: {gridCol}; grid-column-end: {gridCol +
		gridColSpan};"
	data-col={gridCol}
>
	<span class="label-text">Clickable Rows</span>
	<input
		id="full-width"
		name="full-width"
		type="checkbox"
		bind:checked={$tableState.clickableRows}
		class="checkbox"
	/>
	{#if $tableState.clickableRows}
		<QuestionMarkButton
			bind:selected={showMessage}
			on:mouseenter={() => (showMessage = true)}
			on:mouseleave={() => (showMessage = false)}
			on:click={() => toggleMessage()}
		/>
	{/if}
</label>

{#if showMessage}
	<div
		transition:fade|local
		class="alert absolute z-50 w-3/4 md:w-6/12 lg:w-1/4"
		style="{messagePosition} opacity: 0.95"
	>
		<div class="flex-1">
			<span
				>Clicking on any row in the body of the table will open a modal containing the data rendered
				in that row.</span
			>
		</div>
	</div>
{/if}
