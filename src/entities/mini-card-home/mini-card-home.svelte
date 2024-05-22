<script lang="ts">
	export let mountListFile: boolean;
</script>

<div class="root">
	<slot name="header" />
	<div class="content">
		<slot name="uploader" />
		{#if mountListFile}
			<div class="list-container">
				<slot name="upload-list" />
				<slot name="processed-list" />
			</div>
		{/if}
	</div>
</div>

<style lang="postcss">
	.root {
		display: flex;
		flex-direction: column;
		overflow-x: hidden;
		overflow-y: auto;
		padding: 20px;
		width: 100%;
	}

	.content {
		display: flex;
		flex-direction: column;
		gap: 20px;
		width: 100%;
	}

	.list-container {
		display: flex;
		gap: 50px;
	}

	@media (max-width: 730px) {
		.list-container {
			flex-direction: column;
			gap: 10px;
		}
	}
</style>
