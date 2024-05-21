<script lang="ts">
</script>

<div class="root">
	<ul class="list-container">
		{#each [1, 2] as item}
			<li>
				<div class="list-item-content">
					<div class="file-container"></div>
					<div class="list-item-text-container">
						<span class="list-item-title" />
						<span class="list-item-description" />
					</div>
				</div>
				<div class="list-item-action">
					<div>
						<div class="list-item-action-button" />
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
		list-style-type: none;
		margin: 0;
		padding: 0;
		width: 100%;
	}

	li {
		border-radius: 5px;
		border: 1px solid gainsboro;
		display: flex;
		margin: 5px;
		min-height: 65px;
		padding: 10px;
	}

	.list-item-content {
		width: 100%;
		display: flex;
		gap: 10px;
	}

	.list-item-title {
		background-color: gainsboro;
		border-radius: 5px;
		width: 40%;
		height: 5px;
	}

	.list-item-text-container {
		display: flex;
		flex-direction: column;
		gap: 5px;
		justify-content: center;
		width: 100%;
	}

	.list-item-description {
		background-color: gainsboro;
		border-radius: 5px;
		width: 80%;
		height: 5px;
	}

	.file-container {
		align-items: center;
		background-color: gainsboro;
		border-radius: 5px;
		display: flex;
		justify-content: center;
		min-width: 25px;
		padding: 20px;
	}

	.list-item-action {
		display: flex;
		place-items: center;
	}

	.list-item-action-button {
		align-items: center;
		background-color: gainsboro;
		border-radius: 50px;
		border: none;
		display: flex;
		justify-content: center;
		height: 44px;
		width: 44px;
	}
</style>
