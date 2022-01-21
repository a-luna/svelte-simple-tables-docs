<script lang="ts">
	import CopyButton from '$lib/components/Buttons/CopyButton.svelte';
	import CodeViewer from '$lib/components/CodeViewer.svelte';
	import ContentSelectorDropDown from '$lib/components/ContentSelector/ContentSelectorDropDown.svelte';
	import ModalContainer from '$lib/components/Modals/ModalContainer.svelte';
	import { createEventDispatcher } from 'svelte';

	export let code: string = '';
	export let show: boolean = false;
	const dispatch = createEventDispatcher();
	let modalContainer: ModalContainer;

	$: if (show) modalContainer.toggleModal();
</script>

<ModalContainer bind:this={modalContainer} bind:hidden={show}>
	<div slot="heading" class="heading p-2 w-full">Code Viewer</div>
	<div slot="content" class="outer-content">
		<div class="flex flex-row flex-nowrap justify-start items-center gap-3 my-3 w-full">
			<ContentSelectorDropDown />
			<CopyButton tooltip={'Copy Code to Clipboard'} on:click={() => dispatch('copyCode')} />
		</div>
		<div class="content">
			<CodeViewer {code} />
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
		color: var(--white1);
	}

	.outer-content {
		padding: 0 0.75rem;
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
