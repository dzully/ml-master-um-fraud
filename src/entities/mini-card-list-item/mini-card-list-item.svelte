<script lang="ts">
	import CsvFileIcon from '../../assets/csv-file.svg';
	import DownloadIcon from '../../assets/download-icon.svg';

	export let listOfFiles;
	export let handleDownload;
	export let loadingDownload;
</script>

<div class="root">
	<ul>
		{#each listOfFiles as file}
			<li class={loadingDownload ? 'list-item-container-loading' : 'list-item-container'}>
				<div class="list-item-content">
					<div class="file-container">
						<img src={CsvFileIcon} alt="csv-file-icon" />
					</div>
					<div class="list-item-text-container">
						<span class="list-item-title">{file.name}</span>
						<span class="list-item-description">
							{new Date(file.updated_at).toLocaleString()}
						</span>
					</div>
				</div>
				<div class="list-item-action">
					<div>
						<button
							class={loadingDownload
								? 'list-item-action-button-loading'
								: 'list-item-action-button'}
							on:click={handleDownload(file)}
						>
							<img src={DownloadIcon} alt="download-icon" />
						</button>
					</div>
				</div>
			</li>
		{/each}
	</ul>
</div>

<style lang="postcss">
	.root {
		width: 100%;
	}

	ul {
		display: flex;
		flex-direction: column;
		gap: 10px;
		list-style-type: none;
		margin: 0;
		padding: 0;
	}

	.list-item-container-loading {
		border-radius: 5px;
		border: 1px solid #9984c0;
		animation: gray-like-border 2s linear infinite;
		display: flex;
		min-height: 65px;
		padding: 10px;
	}

	.list-item-container {
		border-radius: 5px;
		border: 1px solid #9984c0;
		display: flex;
		min-height: 65px;
		padding: 10px;
	}

	.list-item-content {
		display: flex;
		gap: 10px;
		width: 80%;
	}

	.list-item-title {
		font-weight: bold;
		font-size: large;
		word-wrap: break-word;
	}

	.list-item-text-container {
		display: flex;
		flex-direction: column;
		gap: 5px;
		justify-content: center;
		width: 80%;
	}

	.list-item-description {
		color: #4c4c4c;
	}

	.file-container {
		align-items: center;
		background-color: rgb(243, 230, 255);
		border-radius: 5px;
		display: flex;
		justify-content: center;
		padding: 20px;
	}

	.list-item-action {
		display: flex;
		place-items: center;
		width: 20%;
		justify-content: flex-end;
	}

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

	.list-item-action-button {
		align-items: center;
		background-color: rgb(243, 230, 255);
		border: 2px solid rgb(243, 230, 255);
		border-radius: 50px;
		cursor: pointer;
		display: flex;
		justify-content: center;
		padding: 10px;
	}

	.list-item-action-button:hover {
		border: 2px solid rgb(243, 230, 255);
		animation: purple-like-border 2s linear infinite;
	}

	.list-item-action-button-loading {
		align-items: center;
		background-color: rgb(243, 230, 255);
		border: 2px solid rgb(243, 230, 255);
		animation: purple-like-border 2s linear infinite;
		border-radius: 50px;
		cursor: pointer;
		display: flex;
		justify-content: center;
		padding: 10px;
	}
</style>
