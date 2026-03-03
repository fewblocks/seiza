<script lang="ts">
	import { fade } from 'svelte/transition';
	import { tooltipText, tooltipId, tooltipX, tooltipY } from '$lib/stores/tooltip';
	import type { Writable } from 'svelte/store';
	import { writable } from 'svelte/store';
	import { resize } from '$lib/actions/resize';
	import kaitenImage from '$lib/assets/image_seiza_ban_kaiten.png';
	import stickyImage from '$lib/assets/image_seiza_ban_no_kaiten.png';
	import KaitenContent from '$lib/components/organisms/seiza-hayamiban/KaitenContent.svelte';
	import StickyContent from '$lib/components/organisms/seiza-hayamiban/StickyContent.svelte';
	import SvgContent from '$lib/components/organisms/seiza-hayamiban/SvgContent.svelte';
	import RotationRange from '$lib/components/ui/RotationRange.svelte';
	import SeizaDescriptionSection from './seiza-hayamiban-result/SeizaDescriptionSection.svelte';

	let { id = writable('minaminouo') }: { id?: Writable<string> } = $props();

	// 角度: ユーザー操作で変わる値を store にする
	let angle = writable(0);

	let scale = $state(1);
	function handleKaitenWidth(width: number) {
		scale = width / 1000;
		console.log(scale, 'scale');
	}
</script>

<div class="seiza-hayamiban-wrapper">
	<div class="seiza-hayamiban">
		<!-- rotating content -->
		<KaitenContent image={kaitenImage} {angle}>
			<!-- TODO: use → attachments に変更する -->
			<div use:resize={handleKaitenWidth} style="width: 100%; height: 100%;">
				<SvgContent {scale} {id} {angle} />
			</div>
		</KaitenContent>
		<!-- sticky content -->
		<StickyContent image={stickyImage} />
		<!-- input range for rotation -->
		<div>
			<RotationRange {angle} />
		</div>
		<!-- ポップアップ表示 -->
		{#if $tooltipId}
			<div
				class="tooltip-popup"
				in:fade={{ duration: 150 }}
				out:fade={{ duration: 100 }}
				style="left: {$tooltipX}px; top: {$tooltipY}px;"
			>
				{$tooltipText}
			</div>
		{/if}
	</div>

	<div class="seiza-result">
		<SeizaDescriptionSection id={$id ? $id : ''} />
	</div>
</div>

<style>
	.seiza-hayamiban-wrapper {
		display: flex;
		flex-direction: row;
		align-items: flex-start;
		justify-content: center;
		margin-top: 20px;
	}

	.seiza-hayamiban {
		position: relative;
		height: 620px;
		width: 620px;
	}

	.seiza-result {
		margin-left: 20px;
		height: 520px;
		width: 400px;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.tooltip-popup {
		position: fixed;
		transform: translate(-50%, -100%) translateY(-10px);
		background-color: black;
		color: white;
		padding: 8px 16px;
		border-radius: 6px;
		z-index: 1200;
		white-space: nowrap;
		font-size: 14px;
	}

	/* Breakpoint: large screens (>=1200px) */
	@media (min-width: 1200px) {
		.seiza-hayamiban-wrapper {
			margin-left: 20px;
			padding: 10px;
			display: flex;
			flex-direction: row;
			align-items: flex-start;
		}

		.seiza-hayamiban {
			width: 620px;
			height: 620px;
		}

		.seiza-result {
			margin-left: 20px;
			width: 200px;
			height: 620px;
		}
	}

	/* Breakpoint: medium (961px - 1199px) */
	@media (min-width: 961px) and (max-width: 1199px) {
		.seiza-hayamiban-wrapper {
			margin-left: 16px;
			padding: 10px;
			display: flex;
			flex-direction: row;
			align-items: flex-start;
		}

		.seiza-hayamiban {
			width: 460px;
			height: 460px;
		}

		.seiza-result {
			margin-left: 16px;
			width: 400px;
			height: 460px;
		}
	}

	/* Breakpoint: small (601px - 960px) */
	@media (min-width: 601px) and (max-width: 960px) {
		.seiza-hayamiban-wrapper {
			display: flex;
			flex-direction: row;
			align-items: flex-start;
			justify-content: center;
		}

		.seiza-hayamiban {
			width: 60vw;
			height: 60vw;
			max-width: 520px;
			max-height: 520px;
		}

		.seiza-result {
			margin-left: 12px;
			width: 28vw;
			max-width: 260px;
			height: calc(28vw * 2.2);
			max-height: 520px;
		}
	}

	/* Mobile / very small screens: 600px 以下 */
	@media (max-width: 600px) {
		.seiza-hayamiban-wrapper {
			margin-left: 0;
			padding: 10px;
			display: flex;
			flex-direction: column;
			align-items: center;
			height: auto;
		}

		.seiza-hayamiban {
			position: relative;
			width: 90vw;
			height: 90vw;
			max-width: 520px;
			max-height: 520px;
			margin: 0 auto;
		}

		.seiza-result {
			margin-left: 0;
			margin-top: 12px;
			width: 90%;
			max-width: 520px;
			height: auto;
			display: flex;
			align-items: center;
			justify-content: center;
		}
	}
</style>
