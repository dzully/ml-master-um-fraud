<script lang="ts">
	import CloseIcon from '../../../assets/close-icon.svg';
	export let onHandleClose: () => void;
	export let error: string;
</script>

<div class="root">
	<div class="content">
		<p class="title">{error}</p>
		<div class="action-container">
			<button class="action-button" on:click={onHandleClose}>
				<img src={CloseIcon} alt="close-icon" height="20" width="20" />
			</button>
		</div>
	</div>
</div>

<style lang="postcss">
	.root {
		align-items: center;
		bottom: 10px;
		display: flex;
		justify-content: center;
		left: 0;
		position: fixed;
		right: 0;
	}

	.content {
		align-items: center;
		background-color: red;
		border-radius: 5px;
		color: white;
		display: flex;
		justify-content: center;
		padding: 10px;
		width: 200px;
		height: 30px;
	}

	.action-container {
		display: flex;
		gap: 5px;
	}

	.action-button {
		align-items: center;
		background-color: transparent;
		border: none;
		cursor: pointer;
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 15px;
		color: black;
	}
</style>
