<script lang="ts">
	import axios from 'redaxios';
	import LinkIcon from '../../assets/link-icon.svg';
	import { BaseUrl } from '../../shared/apis/base-url';
	import { Endpoint } from '../../shared/enums/endpoint.enum';
	import ErrorSnackbar from '../../shared/ui/error-snackbar/error-snackbar.svelte';

	let error: string = '';
	let fileLink = '';
	let loading = false;
	export let refreshComponent: () => void;

	async function uploadToServer() {
		if (!fileLink) {
			error = 'Please provide a link';
			setTimeout(() => {
				error = '';
			}, 3000);
			return;
		}
		loading = true;
		axios
			.post(`${BaseUrl}/${Endpoint.uploadLink}`, {
				link: fileLink
			})
			.then(() => {
				refreshComponent();
			})
			.catch(() => {
				error = 'Failed to upload the file';

				setTimeout(() => {
					error = '';
				}, 3000);
			})
			.finally(() => {
				fileLink = '';
				loading = false;
			});
	}

	function onHandleClose() {
		error = '';
	}
</script>

<form class="root" on:submit={uploadToServer}>
	<input
		bind:value={fileLink}
		class="input-container"
		disabled={loading}
		placeholder="Paste the link here"
		type="text"
	/>
	<button class="button-container {loading ? '' : 'active'}" disabled={loading} type="submit">
		{#if loading}
			<div class="loader" />
		{:else}
			<img src={LinkIcon} alt="link icon" height="20" width="20" />
			<span class="upload-title">Upload CSV via Link</span>
		{/if}
	</button>
	{#if error}
		<ErrorSnackbar {onHandleClose} {error} />
	{/if}
</form>

<style lang="postcss">
	@keyframes purple-like-border {
		0% {
			border-color: rgb(255, 200, 255);
		}
		25% {
			border-color: rgb(255, 170, 255);
		}
		50% {
			border-color: rgb(255, 140, 255);
		}
		75% {
			border-color: rgb(255, 170, 255);
		}
		100% {
			border-color: rgb(255, 200, 255);
		}
	}

	.root {
		align-items: center;
		display: flex;
		justify-content: flex-end;
		width: 100%;
		gap: 10px;
	}

	.input-container {
		border: 1px solid #9984c0;
		border-radius: 5px;
		height: 30px;
		padding: 5px;
		width: 100%;
	}

	.input-container:focus {
		border-color: rgb(87, 44, 147);
		outline: none;
	}

	.button-container {
		align-items: center;
		background-color: #9984c0;
		border-radius: 5px;
		border: 1px solid #9984c0;
		color: black;
		display: flex;
		gap: 5px;
		gap: 5px;
		height: 40px;
		justify-content: center;
		padding: 5px;
		min-width: 180px;
	}

	.button-container.active {
		cursor: pointer;
	}

	.button-container.active:hover {
		border-color: rgb(87, 44, 147);
	}

	.loader {
		animation: purple-like-border 2s linear infinite;
		border-radius: 50%;
		border: 1px solid rgb(243, 230, 255);
		height: 20px;
		width: 20px;
	}

	@media (max-width: 730px) {
		.upload-title {
			display: none;
		}

		.button-container {
			min-width: 50px;
		}
	}
</style>
