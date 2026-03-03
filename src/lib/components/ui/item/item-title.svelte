<script lang="ts">
	interface Props {
		class?: string;
	}

	const { class: className = '' }: Props = $props();
</script>

<h3 class="font-semibold text-base {className}">
	<slot />
</h3>
