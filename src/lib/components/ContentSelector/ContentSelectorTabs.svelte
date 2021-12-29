<script lang="ts">
	import { active } from '$lib/stores/activeContent';
	import { dataSet } from '$lib/stores/dataSet';
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	$: showCopyButton = $active !== 'settings';
</script>

<div class:copy-button-shown={showCopyButton} class="flex flex-row flex-nowrap justify-between">
	<div class="tabs">
		<span
			class="content-tab"
			class:selected-tab={$active === 'settings'}
			on:click={() => ($active = 'settings')}>Settings</span
		>
		<span
			class="content-tab"
			class:selected-tab={$active === 'svelte-component'}
			on:click={() => ($active = 'svelte-component')}>App.svelte</span
		>
		<span
			class="content-tab"
			class:selected-tab={$active === 'column-settings'}
			on:click={() => ($active = 'column-settings')}>columnSettings.ts</span
		>
		<span
			class="content-tab"
			class:selected-tab={$active === 'data'}
			on:click={() => ($active = 'data')}>data.ts</span
		>
		{#if $dataSet === 'pfx'}
			<span
				class="content-tab"
				class:selected-tab={$active === 'pitchfx'}
				on:click={() => ($active = 'pitchfx')}>PitchFx.ts</span
			>
		{/if}
	</div>
	{#if $active !== 'settings'}
		<div
			class="text-sm btn-accent leading-none mt-auto flex-none copy-button cursor-pointer py-2 px-4"
			on:click={() => dispatch('copyCode')}
		>
			Copy
		</div>
	{/if}
</div>

<style lang="postcss">
	.content-tab {
		color: var(--light-gray3);
		--tab-padding: 1rem;
		cursor: pointer;
		display: inline-flex;
		flex-wrap: wrap;
		align-items: center;
		justify-content: center;
		position: relative;
		text-align: center;
		user-select: none;
		height: 2rem;
		font-size: 0.875rem;
		line-height: 2;
		border-bottom: none;
		border-top-left-radius: var(--tab-radius, 0.5rem);
		border-top-right-radius: var(--tab-radius, 0.5rem);
		padding-left: var(--tab-padding, 1rem);
		padding-right: var(--tab-padding, 1rem);
		padding-top: var(--tab-border, 1px);
	}

	.content-tab.selected-tab {
		--tw-bg-opacity: 1;
		font-weight: 500;
		color: hsl(0, 0%, 0%);
		background-color: hsl(174, 60%, 51%);
		border-left-width: var(--tab-border, 1px);
		border-bottom-width: 0;
		border-right-width: var(--tab-border, 1px);
		border-top-width: var(--tab-border, 1px);
		border-left-color: hsl(174, 60%, 51%);
		border-right-color: hsl(174, 60%, 51%);
		border-top-color: hsl(174, 60%, 51%);
		padding-left: calc(var(--tab-padding, 1rem) - var(--tab-border, 1px));
		padding-right: calc(var(--tab-padding, 1rem) - var(--tab-border, 1px));
		padding-bottom: var(--tab-border, 1px);
		padding-top: 0;
	}

	.content-tab.selected-tab:first-child {
		--tw-bg-opacity: 1;
		background-color: hsla(var(--p) / var(--tw-bg-opacity, 1));
		border-left-width: var(--tab-border, 1px);
		border-bottom-width: 0;
		border-right-width: var(--tab-border, 1px);
		border-top-width: var(--tab-border, 1px);
		border-left-color: hsla(var(--p) / var(--tw-border-opacity, 1));
		border-right-color: hsla(var(--p) / var(--tw-border-opacity, 1));
		border-top-color: hsla(var(--p) / var(--tw-border-opacity, 1));
		padding-left: calc(var(--tab-padding, 1rem) - var(--tab-border, 1px));
		padding-right: calc(var(--tab-padding, 1rem) - var(--tab-border, 1px));
		padding-bottom: var(--tab-border, 1px);
		padding-top: 0;
	}

	.copy-button {
		height: 32px;
		border-top-right-radius: 6px;
		border-top-left-radius: 6px;
		color: hsl(0, 0%, 0%);
	}
</style>
