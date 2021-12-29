<script lang="ts">
	import { alert } from '$lib/stores/alert';
	import { onDestroy } from 'svelte';
	import { fade, slide } from 'svelte/transition';

	export let duration: number = 3000;
	let timeout: NodeJS.Timeout;
	let shown: boolean;

	$: handleMessageChanged($alert.message);

	function handleMessageChanged(message: string) {
		clearTimeout(timeout);
		if (!message) {
			shown = false;
			$alert.state = 'none';
		} else {
			shown = true;
			if (duration > 0) {
				timeout = setTimeout(() => (shown = false), duration);
			}
		}
	}

	onDestroy(() => clearTimeout(timeout));
</script>

{#if shown}
	<div
		role="alert"
		in:slide={{ duration: 1000 }}
		out:fade={{ duration: 500 }}
		on:click={() => (shown = false)}
		class="alert alert-{$alert.state}"
	>
		<div class="flex-1">
			{#if $alert.state === 'success'}
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
					class="flex-shrink-0 w-6 h-6 mx-2"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
					/>
				</svg>
			{:else if $alert.state === 'info'}
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
					class="w-6 h-6 mx-2 stroke-current"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
					/>
				</svg>
			{:else if $alert.state === 'warning'}
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
					class="w-6 h-6 mx-2 stroke-current"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
					/>
				</svg>
			{:else if $alert.state === 'error'}
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
					class="w-6 h-6 mx-2 stroke-current"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"
					/>
				</svg>
			{:else}
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke="#2196f3"
					class="w-6 h-6 mx-2"
					><path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
					/></svg
				>
			{/if}
			<span>{$alert.message}</span>
		</div>
	</div>
{/if}

<style lang="postcss">
	.alert {
		position: absolute;
		margin-left: auto;
		margin-right: auto;
		left: 0;
		right: 0;
		text-align: center;
		z-index: 20;
		width: min-content;
		white-space: nowrap;
	}

	:global(.alert-none) {
		background-color: hsla(var(--b2) / 1);
		color: hsla(var(--bc) / 1);
	}

	:global(.alert-success) {
		background-color: hsla(var(--su) / 0.25);
		color: hsla(var(--su) / 1);
	}

	:global(.alert-info) {
		background-color: hsla(var(--in) / 0.25);
		color: hsla(var(--in) / 1);
	}

	:global(.alert-warning) {
		background-color: hsla(var(--wa) / 0.25);
		color: hsla(var(--wa) / 1);
	}

	:global(.alert-error) {
		background-color: hsla(var(--er) / 0.25);
		color: hsla(var(--er) / 1);
	}
</style>
