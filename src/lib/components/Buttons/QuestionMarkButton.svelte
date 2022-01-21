<script lang="ts">
	import RoundButton from '$lib/components/Buttons/RoundButton.svelte';
	import FaQuestion from 'svelte-icons/fa/FaQuestion.svelte';
	import { fade } from 'svelte/transition';

	export let selected: boolean = false;
</script>

<div transition:fade|local} class="ml-1">
	<RoundButton
		isStateful={true}
		bind:selected
		size={'sm'}
		color={'indigo'}
		on:click
		on:mouseenter
		on:mouseleave
	>
		<FaQuestion />
	</RoundButton>
</div>
