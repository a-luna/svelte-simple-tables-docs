<script lang="ts">
	import CodeViewer from '$lib/components/CodeViewer.svelte';
	import { darkThemeCssVariables } from '$lib/constants';

	import { codeExample } from '$lib/stores/activeContent';
	import { importTableTheme } from '$lib/themes';

	$codeExample = 'theme-palettes';
	const code = JSON.stringify(importTableTheme(darkThemeCssVariables).colorPalletes, null, 4);
</script>

<div>
	<CodeViewer {code} />
</div>

<style lang="postcss">
	div {
		margin: 4rem 0 0 0;
		width: 60vw;
		height: 40vh;
	}
</style>
