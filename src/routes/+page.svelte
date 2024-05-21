<script lang="ts">
	import Home from '../widget/home.svelte';
</script>

<div class="global">
	<Home />
</div>

<style lang="postcss">
	:global(html) {
		background-color: theme(colors.gray.100);
	}

	.global {
		background-color: #f2f2ff;
		position: fixed;
		inset: 0;
		display: flex;
	}
</style>
