<script lang="ts">
	import { onMount } from 'svelte';
	import { writable } from 'svelte/store';
	import type { TransitionConfig } from 'svelte/transition';
	import SeizaHayamibanViewer from '$lib/components/organisms/SeizaHayamibanViewer.svelte';
	import IntroductionViewwer from '$lib/components/organisms/IntroductionViewwer.svelte';

	let id = writable('minaminouo');

	let introVisible = $state(false);
	let seizaVisible = $state(false);
	let introElement: HTMLDivElement;
	let seizaElement: HTMLDivElement;

	// カスタムトランジション（スケール + フェード）
	function springIn(node: Element): TransitionConfig {
		return {
			duration: 800,
			css: (t) => {
				const eased = 1 - Math.pow(1 - t, 3); // cubic-out
				return `
					transform: scale(${0.95 + eased * 0.05}) translateY(${30 * (1 - eased)}px);
					opacity: ${eased};
				`;
			}
		};
	}

	onMount(() => {
		const observerOptions = {
			threshold: 0.1,
			rootMargin: '50px'
		};

		const introObserver = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					introVisible = true;
					introObserver.unobserve(entry.target);
				}
			});
		}, observerOptions);

		const seizaObserver = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					seizaVisible = true;
					seizaObserver.unobserve(entry.target);
				}
			});
		}, observerOptions);

		if (introElement) {
			introObserver.observe(introElement);
		}

		if (seizaElement) {
			seizaObserver.observe(seizaElement);
		}

		return () => {
			introObserver.disconnect();
			seizaObserver.disconnect();
		};
	});
</script>

<svelte:head>
	<title>星座早見盤</title>
</svelte:head>

<div class="content">
	<!-- イントロダクション -->
	<div bind:this={introElement}>
		{#if introVisible}
			<div in:springIn>
				<IntroductionViewwer />
			</div>
		{/if}
	</div>
	<!-- 星座早見盤 -->
	<div bind:this={seizaElement}>
		{#if seizaVisible}
			<div in:springIn>
				<SeizaHayamibanViewer {id} />
			</div>
		{/if}
	</div>
</div>

<style>
	.content {
		height: 1550px;
		width: 100%;
		padding: 20px;
		display: flex;
		justify-content: flex-start;
		flex-direction: column;
	}
	/* Breakpoint: large screens (>=1200px) */
	/* @media (min-width: 1200px) {
		.content {
			margin-left: 20px;
			padding: 10px;
			display: flex;
			flex-direction: row;
			align-items: flex-start;
		}
	} */

	/* Breakpoint: medium (961px - 1199px) */
	/* @media (min-width: 961px) and (max-width: 1199px) {
		.content {
			margin-left: 16px;
			padding: 10px;
			display: flex;
			flex-direction: row;
			align-items: flex-start;
		}
	}

	/* Breakpoint: small (601px - 960px) */
	/* @media (min-width: 601px) and (max-width: 960px) {
		.content {
			margin-left: 8px;
			padding: 8px;
			display: flex;
			flex-direction: row;
			align-items: flex-start;
			justify-content: center;
		}
	} */

	/* Mobile / very small screens: 600px 以下は縦並びにして結果を下側に配置 */
	@media (max-width: 600px) {
		.content {
			margin-left: 0;
			padding: 10px;
			display: flex;
			flex-direction: column;
			align-items: flex-start;
			height: auto;
		}
	}
</style>
