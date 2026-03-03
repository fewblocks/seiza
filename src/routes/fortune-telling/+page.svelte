<script lang="ts">
	import * as FortuneTellingCard from '$lib/components/ui/fortune-telling-card';
	import { getTodayFortune } from '$lib/utils';

	const { year, month, dayOfMonth, todayFortune } = getTodayFortune();
</script>

<div class="fortune-container">
	<header class="text-center">
		<h1 class="text-4xl font-bold tracking-tight">星座占い</h1>
		<p class="text-muted-foreground mt-2 date">{year}年{month}月{dayOfMonth}日</p>
	</header>

	<div class="fortune-list">
		{#each todayFortune as item, i}
			{@const rank = Object.keys(item)[0]}
			{@const constellation = item[rank as keyof typeof item] as string}
			{@const message = item['一言'] as string}
			<FortuneTellingCard.Root {rank} {constellation} {message} />
		{/each}
	</div>
</div>

<style>
	.fortune-container {
		max-width: 800px;
		margin: 0 auto;
		padding: 2rem;
	}

	.fortune-list {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	@media (max-width: 640px) {
		.fortune-container {
			padding: 1rem;
		}

		h1 {
			font-size: 2rem;
		}
	}
</style>
