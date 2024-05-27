<script lang="ts">
</script>

<div class="root">
	<slot name="navigator" />
	<slot name="form" />
</div>

<style lang="postcss">
	.root {
		display: flex;
		flex-direction: column;
		overflow-x: hidden;
		overflow-y: auto;
		padding: 20px;
		width: 100%;
		gap: 10px;
	}
</style>
