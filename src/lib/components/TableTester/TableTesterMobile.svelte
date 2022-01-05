<script lang="ts">
	import Breadcrumbs from '$lib/components/Breadcrumbs.svelte';
	import ChangeSettingsButton from '$lib/components/Buttons/ChangeSettingsButton.svelte';
	import ViewCodeButton from '$lib/components/Buttons/ViewCodeButton.svelte';
	import CodeViewerModal from '$lib/components/Modals/CodeViewerModal.svelte';
	import TableSettingsFormMobile from '$lib/components/TableSettingsForm/TableSettingsFormMobile.svelte';
	import type { ColumnSettings, TableState } from '@a-luna/svelte-simple-tables/types';

	type T = $$Generic;

	export let title: string;
	export let columnSettings: ColumnSettings<T>[];
	export let tableState: TableState;
	export let code: string;
	let showSettingsForm = false;
	let showCodeViewerModal = false;

	function toggleSettingsForm() {
		showCodeViewerModal = false;
	}

	function toggleCodeViewer() {
		showSettingsForm = false;
	}
</script>

<Breadcrumbs {title} />
<div class="flex flex-row flex-nowrap justify-start gap-3 mb-5">
	<ChangeSettingsButton
		tooltip={'Change Table Settings'}
		bind:selected={showSettingsForm}
		on:click={() => toggleSettingsForm()}
	/>
	<ViewCodeButton
		tooltip={'View Code Source'}
		bind:selected={showCodeViewerModal}
		on:click={() => toggleCodeViewer()}
	/>
</div>
{#if showSettingsForm}
	<TableSettingsFormMobile {columnSettings} bind:tableState />
{/if}
<CodeViewerModal bind:show={showCodeViewerModal} {code} on:copyCode />
