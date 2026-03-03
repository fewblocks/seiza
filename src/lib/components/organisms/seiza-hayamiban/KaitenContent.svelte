<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { Writable } from 'svelte/store';

	export let angle: Writable<number>;
	export let image: string | undefined;
	export let children: Snippet | null | undefined;
</script>

<div class="kaiten-content" style="background-image: url({image}); transform: rotate({$angle}deg);">
	{@render children?.()}
</div>

<style>
	.kaiten-content {
		position: absolute;
		top: 10px;
		left: 10px;
		height: 620px;
		width: 620px;
		background-repeat: no-repeat;
		background-size: 100% 100%;
		background-position: center;
		transform-origin: center;
		will-change: transform;
		z-index: 0;
	}

	@media (min-width: 1200px) {
		.kaiten-content {
			top: 10px;
			left: 10px;
			width: 620px;
			height: 620px;
		}
	}

	@media (min-width: 961px) and (max-width: 1199px) {
		.kaiten-content {
			width: 440px;
			height: 440px;
			top: 10px;
			left: 10px;
		}
	}
	@media (min-width: 601px) and (max-width: 960px) {
		.kaiten-content {
			width: 100%;
			height: 100%;
			top: 0;
			left: 0;
		}
	}
	@media (max-width: 600px) {
		.kaiten-content {
			top: 5%;
			left: 5%;
			width: 90%;
			height: 90%;
		}
	}
</style>
