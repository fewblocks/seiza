<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		class?: string;
		children?: Snippet;
	}

	const { class: className = '', children }: Props = $props();
</script>

<p class="text-sm text-muted-foreground leading-relaxed {className}">
	{@render children?.()}
</p>
