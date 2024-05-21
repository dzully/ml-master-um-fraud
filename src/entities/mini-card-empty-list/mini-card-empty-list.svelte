<script lang="ts">
	import NoDataIcon from '../../assets/no-data-icon.svg';
</script>

<div class="root">
	<div class="image-container">
		<img class="no-data-icon" src={NoDataIcon} alt="mini-card-empty-list" />
	</div>
	<div class="text-container">
		<span class="title">No Data</span>
		<span class="description">Please upload a file</span>
	</div>
</div>

<style lang="postcss">
	.root {
		align-items: center;
		display: flex;
		flex-direction: column;
		gap: 10px;
		height: 100%;
		justify-content: center;
		width: 100%;
	}

	.image-container {
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.no-data-icon {
		width: 70px;
		height: 70px;
	}

	.text-container {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.title {
		font-size: 20px;
		font-weight: bold;
		color: #4c4c4c;
	}

	.description {
		font-size: 16px;
		color: #4c4c4c;
	}
</style>
