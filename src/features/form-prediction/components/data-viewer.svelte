<script lang="ts">
	import type { FormResponseData } from '../types/form-response-data.type';

	export let responseData: FormResponseData;
</script>

<div class="root">
	<div class="container">
		{#each Object.entries(responseData) as [key, value]}
			<div class="card-container">
				<div class="card">
					<span class="title">
						{key.replace(/_/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase())}
					</span>
				</div>
				<div class="card-alert {value === 'fraud' ? 'fraud' : 'not_fraud'}">
					<span class="description">
						{#if value === 'fraud'}
							Alert! It may be a fraud!
						{:else}
							It is not a fraud!
						{/if}
					</span>
				</div>
			</div>
		{/each}
	</div>
</div>

<style>
	.root {
		display: flex;
		align-items: center;
		margin-top: 20px;
		justify-content: space-evenly;
	}

	.container {
		display: flex;
		gap: 30px;
		flex-wrap: wrap;
	}

	.card-container {
		display: flex;
		flex-direction: column;
		gap: 10px;
	}

	.card {
		display: flex;
		flex-direction: column;
		background-color: #fff;
		/* align-items: center; */
		border-radius: 10px;
		box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
		padding: 10px;
		width: 300px;
	}

	.card-alert {
		display: flex;
		flex-direction: column;
		background-color: #fff;
		border-radius: 10px;
		box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
		padding: 10px;
		width: 300px;
	}

	.card-alert.fraud {
		background-color: #ffcccc;
	}

	.card-alert.not_fraud {
		background-color: #ccffcc;
	}

	.title {
		font-weight: bold;
		font-size: 30px;
	}

	.description {
		size: 12px;
	}
</style>
