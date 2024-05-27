<script lang="ts">
	import Home from '../widget/home/home.svelte';
</script>

<div class="global">
	<Home />
</div>

<style lang="postcss">
	@import url('https://fonts.googleapis.com/css2?family=Jacquard+12&display=swap');
	:global(html) {
		background-color: theme(colors.gray.100);
		font-family: 'Roboto', sans-serif;
	}

	.global {
		background-color: #f2f2ff;
		position: fixed;
		inset: 0;
		display: flex;
	}
</style>
