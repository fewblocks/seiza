<script lang="ts">
	interface Props {
		class?: string;
		onmouseenter?: (event: MouseEvent) => void;
		onmouseleave?: (event: MouseEvent) => void;
	}

	const { class: className = '', onmouseenter, onmouseleave }: Props = $props();
</script>

<div class="py-2 {className}" {onmouseenter} {onmouseleave}>
	<slot />
</div>

<style>
	div {
		display: flex;
		flex-direction: column;
	}
</style>
