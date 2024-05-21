<script lang="ts">
	import CsvFileIcon from '../../../assets/csv-file.svg';
	import DownloadIcon from '../../../assets/download-icon.svg';

	export let listOfFiles;
	export let handleDownload;
</script>

<div class="root">
	<ul>
		{#each listOfFiles as file}
			<li>
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
						<button class="list-item-action-button" on:click={handleDownload(file)}>
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
		width: 100%;
	}

	li {
		border-radius: 5px;
		border: 1px solid gray;
		display: flex;
		min-height: 65px;
		padding: 10px;
	}

	.list-item-content {
		width: 100%;
		display: flex;
		gap: 10px;
	}

	.list-item-title {
		font-weight: bold;
		font-size: large;
	}

	.list-item-text-container {
		display: flex;
		flex-direction: column;
		gap: 5px;
		justify-content: center;
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
	}

	.list-item-action-button {
		align-items: center;
		background-color: rgb(243, 230, 255);
		border-radius: 50px;
		border: none;
		cursor: pointer;
		display: flex;
		justify-content: center;
		padding: 10px;
	}
</style>
