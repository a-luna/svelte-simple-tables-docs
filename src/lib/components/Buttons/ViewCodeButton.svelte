<script lang="ts">
	import RoundButton from '$lib/components/Buttons/RoundButton.svelte';
	import GoCode from 'svelte-icons/go/GoCode.svelte';

	export let selected: boolean = false;
	export let tooltip: string = '';
</script>

<RoundButton on:click size={'md'} color={'teal'} {tooltip} bind:selected>
	<GoCode />
</RoundButton>
