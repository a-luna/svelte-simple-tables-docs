<script lang="ts">
	import { codeExample } from '$lib/stores/activeContent';
	import Highlight, { HighlightSvelte } from 'svelte-highlight';
	import json from 'svelte-highlight/languages/json';
	import typescript from 'svelte-highlight/languages/typescript';
	import irBlack from 'svelte-highlight/styles/ir-black';

	export let code: string;
</script>

<svelte:head>
	{@html irBlack}
</svelte:head>

<div class="code-viewer overflow-auto">
	{#if $codeExample === 'table-component'}
		<HighlightSvelte {code} />
	{:else if $codeExample === 'theme-palettes'}
		<Highlight language={json} {code} />
	{:else}
		<Highlight language={typescript} {code} />
	{/if}
</div>

<style lang="postcss">
	:global(.tab-content code.hljs) {
		font-size: 0.75rem;
		line-height: 1.6;
		border-radius: 16px;
		padding: 1.25rem;
		max-height: 300px;
	}
</style>
