<script lang="ts">
	import axios from 'redaxios';
	import uploadIconGray from '../../assets/upload-icon-gray.svg';
	import uploadIcon from '../../assets/upload-icon.svg';
	import { BaseUrl } from '../../shared/apis/base-url';
	import { BucketName } from '../../shared/enums/bucket-name.enum';
	import { Endpoint } from '../../shared/enums/endpoint.enum';
	import { supabase } from '../../shared/lib/supabase-client';
	import ErrorSnackbar from '../../shared/ui/error-snackbar/error-snackbar.svelte';

	let loading = false;
	let isDragOver = false;
	let errorSnackbar: string = '';
	export let refreshComponent: () => void;

	async function uploadToServer(file: File) {
		const fileName = file.name.split('.')[0] + '-' + Date.now() + '.' + file.name.split('.')[1];
		const { data, error } = await supabase.storage
			.from(BucketName.upload_csv)
			.upload(fileName, file, {
				cacheControl: '3600',
				upsert: false
			});
		if (error) {
			console.error(error);
			loading = false;
			return;
		}

		if (data) {
			const handleRemoveFile = async (fileName: string) => {
				const { error } = await supabase.storage.from(BucketName.upload_csv).remove([fileName]);
				if (error) {
					console.error(error);
				}
			};

			axios
				.post(`${BaseUrl}/${Endpoint.uploadLocal}`, {
					fileName: data.path
				})
				.then(() => {
					refreshComponent();
				})
				.catch(() => {
					errorSnackbar = 'Failed to upload the file';
					handleRemoveFile(fileName);

					setTimeout(() => {
						errorSnackbar = '';
					}, 3000);
				})
				.finally(() => {
					loading = false;
				});
		}
	}

	function UploadFile() {
		if (loading) return;
		const input = document.createElement('input');
		input.type = 'file';
		input.click();

		input.onchange = (e) => {
			loading = true;
			const file = (e.target as HTMLInputElement)?.files?.[0];
			if (!file) return;

			uploadToServer(file);
		};

		input.oncancel = () => {
			isDragOver = false;
			loading = false;
		};
	}

	function handleDragEnter(event: DragEvent) {
		event.preventDefault();
		isDragOver = true;
	}

	function handleDragLeave(event: DragEvent) {
		event.preventDefault();
		isDragOver = false;
	}

	function handleDrop(event: DragEvent) {
		event.preventDefault();
		if (loading) return;
		const file = event.dataTransfer?.files[0];
		if (!file) return;
		loading = true;
		uploadToServer(file);
	}

	function handleDragOver(event: DragEvent) {
		event.preventDefault();
	}

	function onHandleClose() {
		errorSnackbar = '';
	}
</script>

<div class={loading ? 'loading-root' : 'root'}>
	<button
		class="button-container {isDragOver ? 'drag-over' : ''}"
		disabled={loading}
		on:click={UploadFile}
		on:dragenter={handleDragEnter}
		on:dragleave={handleDragLeave}
		on:dragover={handleDragOver}
		on:drop={handleDrop}
	>
		<img class="upload-icon" src={loading ? uploadIconGray : uploadIcon} alt="upload icon" />
		<div class={loading ? 'loading-content' : 'content'}>
			{#if loading}
				Uploading file...
			{:else}
				Please click or drag and drop a file here
			{/if}
		</div>
	</button>
	{#if errorSnackbar}
		<ErrorSnackbar {onHandleClose} error={errorSnackbar} />
	{/if}
</div>

<style lang="postcss">
	.loading-root {
		background-color: gainsboro;
		border-color: #9984c0;
		border-radius: 5px;
		border-style: dotted;
		cursor: pointer;
		height: 200px;
		min-width: 40%;
		text-align: center;
	}

	.root {
		border-color: #9984c0;
		border-radius: 5px;
		border-style: dotted;
		cursor: pointer;
		height: 200px;
		min-width: 40%;
		text-align: center;
	}

	.root:hover {
		border-color: rgb(87, 44, 147);
	}

	.content {
		cursor: pointer;
		padding: 10px;
	}

	.loading-content {
		padding: 10px;
		color: gray;
	}

	.button-container {
		align-items: center;
		border: none;
		cursor: pointer;
		display: flex;
		justify-content: center;
		min-height: 100px;
		height: 100%;
		padding: 20px;
		width: 100%;
		background-color: unset;
	}

	.button-container:hover {
		background-color: #e6e6fe;
	}

	.button-container.drag-over {
		background-color: #e6e6fe;
	}
</style>
