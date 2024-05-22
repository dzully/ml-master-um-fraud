<script>
	import MiniCardDivider from './components/mini-card-divider.svelte';
</script>

<div class="root">
	<slot name="first-section" />
	<MiniCardDivider />
	<slot name="second-section" />
</div>

<style lang="postcss">
	.root {
		background-color: rgb(243, 230, 255);
		border-radius: 5px;
		display: flex;
		flex-direction: column;
		gap: 20px;
		padding: 10px;
	}
</style>
