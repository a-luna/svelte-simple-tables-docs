<script lang="ts">
	export let title: string;
</script>

<div class="breadcrumbs mb-4">
	<a href="/">Home</a> <span class="arrow">&gt;</span> <span class="current">{title}</span>
</div>

<style lang="postcss">
	.breadcrumbs {
		font-size: 1.5rem;
		padding: 1rem 0;
	}

	.breadcrumbs > * {
		margin-right: 0.5rem;
	}

	.breadcrumbs a,
	.breadcrumbs a:visited {
		color: var(--white4);
		box-shadow: inset 0 -5px 0 var(--indigo3);
		text-decoration: none;
	}

	.breadcrumbs a:hover,
	.breadcrumbs a:active,
	.breadcrumbs a:focus {
		color: var(--white41);
		background-color: var(--indigo3);
		text-decoration: none;
		padding-top: 2px;
		padding-bottom: 0;
		border-bottom: none;
		transition: background-color, color 350ms ease-out;
		box-shadow: none;
	}

	.breadcrumbs a:hover,
	.breadcrumbs a:active {
		outline: 0;
	}

	.breadcrumbs .arrow {
		color: var(--light-gray2);
	}

	.breadcrumbs .current {
		color: var(--white4);
	}
</style>
