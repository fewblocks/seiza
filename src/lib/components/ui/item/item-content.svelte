<script lang="ts">
	interface Props {
		class?: string;
	}

	const { class: className = '' }: Props = $props();
</script>

<div class="space-y-1 {className}">
	<slot />
</div>
