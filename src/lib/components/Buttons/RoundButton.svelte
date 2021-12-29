<script lang="ts">
	import type { ButtonColor } from '$lib/types';
	import { HslColor } from '$lib/types';

	export let size: 'sm' | 'md' | 'lg' = 'md';
	export let color: ButtonColor = 'blue';
	export let tooltip: string = '';
	export let selected: boolean = false;
	export let isStateful: boolean = true;
	let bgHslColor = HslColor.fromString('hsl(0 0% 0%)');
	const bgColorCssPropName = `--bg-color-${color}`;
	const fgColorCssPropName = `--fg-color-on-${color}`;

	$: buttonSize = size === 'sm' ? 36 : size === 'md' ? 48 : 72;
	$: iconSize = size === 'sm' ? 16 : size === 'md' ? 24 : 36;
	$: padding = size === 'sm' ? 10 : size === 'md' ? 12 : 18;
	$: padAdjust = size === 'sm' ? 0 : size === 'md' ? 2 : 0;
	$: if (typeof window !== 'undefined')
		bgHslColor = HslColor.fromString(getCSSPropValue(document.body, bgColorCssPropName));
	$: bgHslaColor = `hsla(${bgHslColor.hue}deg ${bgHslColor.saturation}% ${bgHslColor.lightness}% / 0.15)`;
	$: buttonStyles =
		'overflow-hidden text-base font-medium tracking-wide whitespace-nowrap focus:outline-none flex items-center uppercase rounded-full shadow-sm max-w-max hover:shadow-lg';

	const getCSSPropValue = (element: HTMLElement, propName: string): string =>
		getComputedStyle(element).getPropertyValue(propName);

	function handleClick() {
		if (isStateful) {
			selected = !selected;
		}
	}
</script>

<button
	on:click
	on:click={() => handleClick()}
	class:active={selected}
	class="btn-{color} {buttonStyles}"
	title={tooltip}
	style="--bg: var({bgColorCssPropName}); --bg-transparent: {bgHslaColor}; --fg: var({fgColorCssPropName}); width: {buttonSize}px; height: {buttonSize}px; padding: {padding -
		padAdjust}px {padding}px {padding - padAdjust}px; transition: background 0.2s"
>
	<div
		class="font-bold leading-none tracking-wider"
		style="width: {iconSize}px; height: {iconSize}px; margin: auto"
	>
		<slot />
	</div>
</button>

<style lang="postcss">
	button {
		color: var(--bg);
		background: var(--bg-transparent);
		border: 1px solid var(--bg);
	}

	button:hover,
	button.active,
	button.active:hover {
		color: var(--fg);
		background: var(--bg);
	}
</style>
