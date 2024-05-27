<script>
	export let title = 'or';
</script>

<div class="root">
	<hr />
	<span class="title">{title}</span>
	<hr />
</div>

<style>
	.root {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 10px;
	}

	hr {
		width: 100%;
		border: 0;
		border-top: 1px solid #9984c0;
	}

	span {
		color: black;
	}

	.title {
		line-height: 1.3333;
		color: #4c4c4c;
		font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
		font-weight: 400;
		letter-spacing: 0.0075em;
	}
</style>
