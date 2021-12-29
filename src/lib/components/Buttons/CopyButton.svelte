<script lang="ts">
	import RoundButton from '$lib/components/Buttons/RoundButton.svelte';
	import { onDestroy } from 'svelte';
	import FaCopy from 'svelte-icons/fa/FaCopy.svelte';

	export let selected: boolean = false;
	export let tooltip: string = '';
	let timeout: NodeJS.Timeout;

	$: didCopy(selected);

	function didCopy(clicked: boolean) {
		clearTimeout(timeout);
		if (clicked) {
			timeout = setTimeout(() => (selected = false), 2000);
		}
	}

	onDestroy(() => clearTimeout(timeout));
</script>

<RoundButton isStateful={true} on:click size={'sm'} color={'teal'} {tooltip} {selected}>
	<FaCopy />
</RoundButton>
