<script lang="ts">
	import RoundButton from '$lib/components/Buttons/RoundButton.svelte';
	import GoSettings from 'svelte-icons/go/GoSettings.svelte';

	export let selected: boolean = false;
	export let tooltip: string = '';
</script>

<RoundButton on:click size={'md'} color={'yellow'} {tooltip} bind:selected>
	<GoSettings />
</RoundButton>
