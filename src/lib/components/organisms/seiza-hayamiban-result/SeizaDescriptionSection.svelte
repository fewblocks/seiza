<script lang="ts">
	import { descriptions } from '$lib/data/seiza-descriptions-data';
	import { SeizaDescriptionCard } from '$lib/components/ui/seiza-description-card';

	interface Props {
		id: string;
	}

	let { id }: Props = $props();
	// let entry = id ? descriptions.find((d) => d.id === id) : undefined;
	let entry = $derived(id ? descriptions.find((d) => d.id === id) : undefined);
</script>

<section aria-label="説明" class="w-full h-full">
	{#if entry}
		<SeizaDescriptionCard name={entry.name} description={entry.description} />
	{:else}
		<p class="text-muted-foreground">指定された id に対応する値がありません</p>
	{/if}
</section>
