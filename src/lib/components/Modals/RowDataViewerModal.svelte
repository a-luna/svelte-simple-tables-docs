<script lang="ts">
	import ModalContainer from '$lib/components/Modals/ModalContainer.svelte';
	import Highlight from 'svelte-highlight';
	import json from 'svelte-highlight/languages/json';
	import irBlack from 'svelte-highlight/styles/ir-black';

	type T = $$Generic;

	export let rowData: T;
	export let show: boolean = false;
	let modalContainer: ModalContainer;

	$: if (show) modalContainer.toggleModal();
	$: modalHeading = !rowData
		? ''
		: 'at_bat_id' in rowData
		? 'PitchFx Data Viewer'
		: 'VaxData Viewer';
</script>

<svelte:head>
	{@html irBlack}
</svelte:head>

<ModalContainer bind:this={modalContainer} bind:hidden={show}>
	<div slot="heading" class="heading p-2 w-full">{modalHeading}</div>
	<div slot="content" class="outer-content">
		<div class="content">
			<div class="code-viewer overflow-auto">
				{#if rowData}
					<Highlight language={json} code={JSON.stringify(rowData, null, 2)} />
				{/if}
			</div>
		</div>
	</div>
	<div slot="buttons" class="buttons flex flex-row flex-nowrap justify-end gap-5 p-3 w-full">
		<button
			class="btn-primary px-2 py-1 overflow-hidden text-base font-medium tracking-wide rounded shadow-md whitespace-nowrap focus:outline-none;
    transition: background 0.2s;"
			on:click={() => modalContainer.toggleModal()}>Close</button
		>
	</div>
</ModalContainer>

<style lang="postcss">
	.heading {
		background-color: var(--black4);
		color: hsl(var(--a));
	}

	.outer-content {
		padding-right: 0.75rem;
		padding-left: 0.75rem;
		padding-bottom: 0.25rem;
		padding-top: 0.25rem;
	}

	.content {
		max-height: 300px;
		overflow: auto;
		border: 1px solid var(--light-gray4);
		border-radius: 6px;
	}

	:global(.modal-content code.hljs) {
		font-size: 0.65rem;
		line-height: 1.6;
	}

	.btn-primary {
		color: var(--black4);
		background-color: hsl(var(--a));
		background-position: center;
		border: 1px solid hsl(var(--a));
	}

	.btn-primary:hover {
		background-color: hsl(var(--a));
		color: var(--black4);
		border: 1px solid transparent;
	}

	.btn-primary:active {
		background-color: hsl(var(--a));
		color: var(--black4);
		background-size: 100%;
		transition: background 0.1s;
		border: 1px solid transparent;
	}

	@media screen and (min-width: 640px) {
		:global(.modal-content code.hljs) {
			font-size: 0.75rem;
		}
	}
</style>
