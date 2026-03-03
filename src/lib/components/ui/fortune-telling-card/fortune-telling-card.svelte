<script lang="ts">
	import { onMount } from 'svelte';
	import { fly } from 'svelte/transition';
	import * as Card from '$lib/components/ui/card';

	type Props = {
		rank: string;
		constellation: string;
		message: string;
	};

	let { rank, constellation, message }: Props = $props();

	let isVisible = $state(false);
	let cardElement: HTMLDivElement;

	// ランクに応じた背景グラデーションを取得
	function getRankGradient(rank: string): string {
		const rankNumber = rank.replace('位', '');
		switch (rankNumber) {
			case '1':
				return 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)';
			case '2':
				return 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)';
			case '3':
				return 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)';
			default:
				return 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
		}
	}

	onMount(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						isVisible = true;
						observer.unobserve(entry.target);
					}
				});
			},
			{
				threshold: 0.1,
				rootMargin: '50px'
			}
		);

		if (cardElement) {
			observer.observe(cardElement);
		}

		return () => {
			observer.disconnect();
		};
	});
</script>

<div bind:this={cardElement}>
	{#if isVisible}
		<div in:fly={{ y: 50, duration: 600, delay: 0 }}>
			<Card.Root class="fortune-card" style="background: {getRankGradient(rank)};">
				<Card.Content class="fortune-card-content">
					<div class="rank-badge">{rank}</div>
					<div class="fortune-text">
						<Card.Title class="constellation">{constellation}</Card.Title>
						<Card.Description class="message">{message}</Card.Description>
					</div>
				</Card.Content>
			</Card.Root>
		</div>
	{/if}
</div>

<style>
	:global(.fortune-card) {
		border: none;
		box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
		transition: transform 0.2s;
		color: white;
		overflow: hidden;
	}

	:global(.fortune-card:hover) {
		transform: translateY(-2px);
		box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
	}

	:global(.fortune-card-content) {
		display: flex;
		align-items: center;
		gap: 1rem;
		padding: 1.5rem !important;
	}

	.rank-badge {
		font-size: 1.5rem;
		font-weight: bold;
		min-width: 60px;
		text-align: center;
		padding: 0.5rem;
		background: rgba(255, 255, 255, 0.2);
		border-radius: 8px;
		backdrop-filter: blur(10px);
	}

	.fortune-text {
		flex: 1;
	}

	:global(.constellation) {
		font-size: 1.3rem;
		font-weight: bold;
		margin: 0 0 0.5rem 0;
		color: white !important;
	}

	:global(.message) {
		margin: 0;
		font-size: 1rem;
		opacity: 0.95;
		line-height: 1.6;
		color: white !important;
	}

	@media (max-width: 640px) {
		:global(.fortune-card-content) {
			padding: 1rem !important;
		}

		.rank-badge {
			min-width: 50px;
			font-size: 1.2rem;
		}

		:global(.constellation) {
			font-size: 1.1rem;
		}

		:global(.message) {
			font-size: 0.9rem;
		}
	}
</style>
