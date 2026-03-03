<script lang="ts">
	import { onMount } from 'svelte';

	let starsContainer: HTMLDivElement;

	onMount(() => {
		// 星を生成する関数
		const createStar = () => {
			const starEl = document.createElement('span');
			starEl.className = 'star';
			const minSize = 1; // 星の最小サイズを指定
			const maxSize = 2; // 星の最大サイズを指定
			const size = Math.random() * (maxSize - minSize) + minSize;
			starEl.style.width = `${size}px`;
			starEl.style.height = `${size}px`;
			starEl.style.left = `${Math.random() * 100}%`;
			starEl.style.top = `${Math.random() * 100}%`;
			starEl.style.animationDelay = `${Math.random() * 10}s`;
			starsContainer.appendChild(starEl);
		};

		// for文で星を生成する関数を指定した回数呼び出す
		for (let i = 0; i <= 500; i++) {
			createStar();
		}
	});
</script>

<div class="stars" bind:this={starsContainer}>
	<slot />
</div>

<style>
	/* 星空の背景のスタイル */
	.stars {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100vh;
		background-image: linear-gradient(0deg, #00dedc, #115d89, #080f1c);
		overflow: hidden;
		z-index: -1;
		pointer-events: none;
	}

	/* 星のスタイル */
	:global(.star) {
		position: absolute;
		display: block;
		background-color: #fff;
		border-radius: 50%;
		box-shadow: 0 0 4px 2px rgba(255, 255, 255, 0.2);
		opacity: 0;
		animation: twinkle 3s infinite;
	}

	/* 星がキラキラ光るアニメーション */
	@keyframes twinkle {
		0% {
			opacity: 0;
		}

		50% {
			transform: scale(1.1);
			opacity: 1;
		}

		100% {
			opacity: 0;
			transform: scale(1);
		}
	}
</style>
