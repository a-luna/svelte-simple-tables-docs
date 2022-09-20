<script>
	import Alert from '$lib/components/Alert.svelte';
	import Nav from '$lib/components/Nav.svelte';
	import '../app.css';
</script>

<Alert />
<Nav />
<main class="m-5">
	<slot />
</main>

<style lang="postcss">
	main {
		--sst-table-wrapper-margin: 0 auto;
	}
</style>