<script lang="ts">
	import Home from '../widget/home.svelte';
	import { createClient } from '@supabase/supabase-js';

	const supabase = createClient(
		import.meta.env.VITE_SUPABASE_URL,
		import.meta.env.VITE_SUPABASE_KEY
	);
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
