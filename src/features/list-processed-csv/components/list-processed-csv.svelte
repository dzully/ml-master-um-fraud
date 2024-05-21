<script lang="ts">
	import MiniCardListItem from '../../../entities/mini-card-list-item/mini-card-list-item.svelte';
	import { BucketName } from '../../../shared/enums/bucket-name.enum';
	import { onHandleDownload } from '../../../shared/lib/handle-download';
	import { supabase } from '../../../shared/lib/supabase-client';
	import type { FileObject } from '../types/file-object.type';
	import ItemLoading from './item-loading.svelte';

	export let listOfFiles: FileObject[] = [];
	let loading = false;
	let loadingDownload = false;

	async function fetchFiles() {
		loading = true;
		const { data, error } = await supabase.storage.from(BucketName.processed_csv).list();
		if (error) {
			console.error(error);
			loading = false;
			return;
		}
		listOfFiles = data;
		loading = false;
	}

	fetchFiles();

	const handleDownload = async (item: FileObject) => {
		loadingDownload = true;
		onHandleDownload(item, BucketName.processed_csv).then(() => {
			loadingDownload = false;
		});
	};
</script>

<div class="root">
	<h3>Processed CSV</h3>
	{#if loading}
		<ItemLoading />
	{/if}
	{#if listOfFiles.length === 0 && !loading}
		<slot name="no-data" />
	{/if}
	{#if listOfFiles.length > 0 && !loading}
		<MiniCardListItem {listOfFiles} {handleDownload} {loadingDownload} />
	{/if}
</div>

<style lang="postcss">
	.root {
		width: 50%;
	}

	@media (max-width: 730px) {
		.root {
			width: 100%;
		}
	}
</style>
