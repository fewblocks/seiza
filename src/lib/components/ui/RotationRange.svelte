<script lang="ts">
	import * as Slider from '$lib/components/ui/slider';

	let { angle } = $props();

	// Sliderの値を管理
	let sliderValue = $state($angle);

	// angleが外部から変更されたときにsliderValueを更新
	$effect(() => {
		sliderValue = $angle;
	});

	// sliderValueが変更されたときにangleを更新
	$effect(() => {
		if (sliderValue !== $angle) {
			$angle = sliderValue;
		}
	});
</script>

<Slider.Root bind:value={sliderValue} type="single" min={0} max={370} step={1} class="w-full" />
