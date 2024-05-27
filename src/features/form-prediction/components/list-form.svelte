<script lang="ts">
	export let formData;
	export let handleSubmit;
	export let loading;
</script>

<form on:submit|preventDefault={handleSubmit} class="form-container">
	{#each Object.entries(formData) as [key, value]}
		<div class="form-content">
			<label class="label-content">
				{key.replace(/_/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase())}:
				<input
					type="number"
					name={key}
					bind:value={formData[key]}
					class="input-container"
					disabled={loading}
				/>
			</label>
		</div>
	{/each}

	<button class="button-container {loading ? '' : 'active'}" disabled={loading} type="submit">
		{#if loading}
			<div class="loader" />
		{:else}
			<span>Detect</span>
		{/if}
	</button>
</form>

<style>
	.form-container {
		display: flex;
		flex-direction: column;
		gap: 10px;
	}

	.form-content {
		display: flex;
	}

	.label-content {
		display: flex;
		flex-direction: column;
	}

	.input-container {
		border: 1px solid #9984c0;
		border-radius: 5px;
		height: 30px;
		padding: 5px;
		width: 250px;
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
		width: 100%;
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
</style>
