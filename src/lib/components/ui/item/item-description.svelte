<script lang="ts">
	interface Props {
		class?: string;
	}

	const { class: className = '' }: Props = $props();
</script>

<p class="text-sm text-muted-foreground leading-relaxed {className}">
	<slot />
</p>
