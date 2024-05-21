<script lang="ts">
	import { BucketName } from '../../../shared/enums/bucket-name.enum';
	import { onHandleDownload } from '../../../shared/lib/handle-download';
	import { supabase } from '../../../shared/lib/supabase-client';
	import type { FileObject } from '../types/file-object.type';
	import ItemLoading from './item-loading.svelte';
	import ListItem from './list-item.svelte';

	export let listOfFiles: FileObject[] = [];
	let loading = false;

	async function fetchFiles() {
		loading = true;
		const { data, error } = await supabase.storage.from(BucketName.upload_csv).list();
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
		onHandleDownload(item, BucketName.upload_csv);
	};
</script>

<div class="root">
	<h3>Upload CSV</h3>
	{#if loading}
		<ItemLoading />
	{/if}
	{#if listOfFiles.length === 0 && !loading}
		<slot name="no-data" />
	{/if}
	{#if listOfFiles.length > 0 && !loading}
		<ListItem {listOfFiles} {handleDownload} />
	{/if}
</div>

<style lang="postcss">
	.root {
		width: 50%;
	}
</style>
