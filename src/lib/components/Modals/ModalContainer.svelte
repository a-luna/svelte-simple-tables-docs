<script lang="ts">
	export let hidden: boolean = false;

	export function toggleModal() {
		hidden = !hidden;
		document.querySelector('body').classList.toggle('modal-active');
	}
</script>

<div class="modal-wrapper" class:opacity-0={!hidden} class:pointer-events-none={!hidden}>
	<div class="modal-overlay" on:click={() => toggleModal()} />
	<div id="modal" class="modal-container" style="background-color: var(--dark-gray3)">
		<div class="modal-content">
			<div class="modal-heading text-base tracking-wide leading-none">
				<slot name="heading" />
			</div>
			<slot name="content" style="background-color: var(--black1)" />
		</div>
		<slot name="buttons" />
	</div>
</div>

<style lang="postcss">
	:global(body.modal-active) {
		overflow-x: hidden;
		overflow-y: visible !important;
	}

	:global(.modal-wrapper) {
		@apply fixed w-full h-full top-0 left-0 flex items-center justify-center z-10;
		transition: opacity 0.4s ease;
	}

	:global(.modal-overlay) {
		@apply absolute w-full h-full bg-gray-900 opacity-50;
	}

	:global(.modal-container) {
		@apply flex flex-col items-end w-auto m-auto rounded shadow-lg overflow-y-auto z-50;
		border: 1px solid var(--body-text-color);
		max-width: 90%;
		max-height: 90%;
	}

	:global(.modal-heading) {
		@apply flex flex-row justify-between items-start pb-1;
	}

	:global(.modal-content) {
		@apply text-left w-full mx-auto;
		overflow-x: auto;
		overflow-y: hidden;
		white-space: nowrap;
		border-radius: 4px;
		background-color: inherit;
	}

	.modal-container {
		border: 2px solid var(--black4);
		border-radius: 6px;
	}
</style>
