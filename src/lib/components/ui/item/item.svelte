<script lang="ts">
	import type { Snippet } from 'svelte';
	interface Props {
		class?: string;
		onmouseenter?: (event: MouseEvent) => void;
		onmouseleave?: (event: MouseEvent) => void;
		children?: Snippet;
	}

	const { class: className = '', onmouseenter, onmouseleave, children }: Props = $props();
</script>

<div class="py-2 {className}" {onmouseenter} {onmouseleave}>
	{@render children?.()}
</div>

<style>
	div {
		display: flex;
		flex-direction: column;
	}
</style>
