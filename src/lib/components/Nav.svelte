<script lang="ts">
	let hidden: boolean = true;
</script>

<nav class="relative px-4 flex justify-between items-center shadow h-12">
	<div class="lg:hidden">
		<button class="navbar-burger flex items-center p-3" on:click={() => (hidden = false)}>
			<svg
				class="block h-4 w-4 fill-current"
				viewBox="0 0 20 20"
				xmlns="http://www.w3.org/2000/svg"
			>
				<title>Mobile menu</title>
				<path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
			</svg>
		</button>
	</div>
	<ul
		class="hidden absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 lg:mx-auto lg:flex lg:items-center lg:w-auto lg:space-x-6"
	>
		<li>
			<a
				sveltekit:prefetch
				href="/"
				class="btn btn-ghost btn-sm rounded-btn"
				on:click={() => (hidden = true)}>Home</a
			>
		</li>
		<li>
			<a
				sveltekit:prefetch
				href="/basic"
				class="btn btn-ghost btn-sm rounded-btn"
				on:click={() => (hidden = true)}>Basic Example</a
			>
		</li>
		<li>
			<a
				sveltekit:prefetch
				href="/complex"
				class="btn btn-ghost btn-sm rounded-btn"
				on:click={() => (hidden = true)}>Complex Example</a
			>
		</li>
		<li>
			<a
				sveltekit:prefetch
				href="/theme_editor"
				class="btn btn-ghost btn-sm rounded-btn"
				on:click={() => (hidden = true)}>CSS Theme Editor</a
			>
		</li>
	</ul>
</nav>
<div class="navbar-menu relative z-50" class:hidden>
	<div
		class="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25"
		on:click={() => (hidden = true)}
	/>
	<nav
		class="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-base-200 border-r overflow-y-auto"
	>
		<div class="flex items-center mb-8">
			<button class="navbar-close btn btn-square btn-ghost" on:click={() => (hidden = true)}>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					class="inline-block w-6 h-6 stroke-current"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M4 6h16M4 12h16M4 18h16"
					/>
				</svg>
			</button>
		</div>
		<div>
			<ul>
				<li class="mb-1">
					<a
						sveltekit:prefetch
						href="/"
						class="btn btn-ghost btn-sm rounded-btn"
						on:click={() => (hidden = true)}>Home</a
					>
				</li>
				<li class="mb-1">
					<a
						sveltekit:prefetch
						href="/basic"
						class="btn btn-ghost btn-sm rounded-btn"
						on:click={() => (hidden = true)}>Basic Example</a
					>
				</li>
				<li class="mb-1">
					<a
						sveltekit:prefetch
						href="/complex"
						class="btn btn-ghost btn-sm rounded-btn"
						on:click={() => (hidden = true)}>Complex Example</a
					>
				</li>
				<li class="mb-1">
					<a
						sveltekit:prefetch
						href="/theme_editor"
						class="btn btn-ghost btn-sm rounded-btn"
						on:click={() => (hidden = true)}>CSS Theme Editor</a
					>
				</li>
			</ul>
		</div>
	</nav>
</div>

<style lang="postcss">
	nav {
		background-color: var(--black4);
	}

	a {
		white-space: nowrap;
	}
</style>
