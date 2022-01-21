<script lang="ts">
	export let hidden: boolean = false;

	export function toggleModal() {
		hidden = !hidden;
		document.querySelector('body').classList.toggle('modal-active');
	}
</script>

<div class="modal-wrapper" class:opacity-0={!hidden} class:pointer-events-none={!hidden}>
	<div class="modal-overlay" on:click={() => toggleModal()} />
	<div id="modal" class="modal-container">
		<div class="modal-content">
			<div class="modal-heading text-base tracking-wide leading-none rounded-none">
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

	.modal-wrapper {
		@apply fixed w-full h-full top-0 left-0 flex items-center justify-center z-10;
		transition: opacity 0.4s ease;
	}

	.modal-overlay {
		@apply absolute w-full h-full bg-gray-900 opacity-50;
	}

	.modal-container {
		@apply flex flex-col items-end m-auto shadow-lg overflow-y-auto z-50;
		background-color: var(--dark-gray1);
		border: 2px solid var(--black4);
		border-radius: 6px;
		max-width: 85%;
		max-height: 90%;
	}

	.modal-heading {
		@apply flex flex-row justify-between items-start text-lg tracking-wider font-medium;
	}

	.modal-content {
		@apply text-left w-full mx-auto;
		overflow-x: auto;
		overflow-y: hidden;
		white-space: nowrap;
		background-color: inherit;
	}

	@media screen and (min-height: 768px) {
		:global(.modal-container) {
			max-width: 800px;
			max-height: 600px;
			height: auto;
		}
	}
</style>
