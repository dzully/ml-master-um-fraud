<script lang="ts">
	import axios from 'redaxios';
	import uploadIconGray from '../../assets/upload-icon-gray.svg';
	import uploadIcon from '../../assets/upload-icon.svg';
	import { endpoint } from '../../shared/apis/endpoint';
	import { BucketName } from '../../shared/enums/bucket-name.enum';
	import { supabase } from '../../shared/lib/supabase-client';

	let loading = false;
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
			const response = axios.post(`${endpoint}/${data.path}`).then(() => {
				loading = false;
				refreshComponent();
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
			loading = false;
		};
	}
</script>

<div class={loading ? 'loading-root' : 'root'}>
	<button on:click={UploadFile} class="button-container" disabled={loading}>
		<img class="upload-icon" src={loading ? uploadIconGray : uploadIcon} alt="upload icon" />
		<div class={loading ? 'loading-content' : 'content'}>
			{#if loading}
				Uploading file...
			{:else}
				Please click here to upload file
			{/if}
		</div>
	</button>
</div>

<style lang="postcss">
	.loading-root {
		border-radius: 5px;
		border-style: dotted;
		border-color: gray;
		cursor: pointer;
		height: 400px;
		min-width: 40%;
		text-align: center;
		background-color: gainsboro;
	}

	.root {
		border-radius: 5px;
		border-style: dotted;
		cursor: pointer;
		height: 400px;
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
</style>
