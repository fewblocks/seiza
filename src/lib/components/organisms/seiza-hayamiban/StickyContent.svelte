<script lang="ts">
	export let image: string;
</script>

<!-- <div class="absolute top-[10px] left-[10px] w-[500px] h-[500px] z-0 flex items-center justify-center pointer-events-none md:max-lg:w-[440px] md:max-lg:h-[440px] md:max-lg:top-[10px] md:max-lg:left-[10px] sm:max-md:w-full sm:max-md:h-full sm:max-md:top-0 sm:max-md:left-0 max-sm:top-[10%] max-sm:left-[10%] max-sm:w-[80%] max-sm:h-[80%]"> -->

<div
	class="sticky-content-wrapper
	absolute top-[10px] left-[10px]
	w-[620px] h-[620px]
	z-0
	flex items-center
	justify-center
	pointer-events-none
	md:max-lg:w-[440px] md:max-lg:h-[440px]
	"
>
	<div class="sticky-content" style="background-image: url({image});">
		<slot />
	</div>
</div>

<style>
	.sticky-content-wrapper {
		/* position: absolute;
		top: 10px;
		left: 10px;
		height: 500px;
		width: 500px;
		z-index: 0;
		display: flex;
		align-items: center;
		justify-content: center;
		pointer-events: none; */
	}

	.sticky-content {
		position: relative;
		height: 90%;
		width: 90%;
		background-repeat: no-repeat;
		background-size: 100% 100%;
		background-position: center;
	}

	@media (min-width: 961px) and (max-width: 1199px) {
		.sticky-content-wrapper {
			width: 100%;
			height: 100%;
			top: 0;
			left: 0;
		}
		.sticky-content {
			position: relative;
			width: 87%;
			height: 87%;
			background-repeat: no-repeat;
			background-size: 100% 100%;
			background-position: center;
		}
	}

	@media (min-width: 601px) and (max-width: 960px) {
		.sticky-content-wrapper {
			width: 100%;
			height: 100%;
			top: 0;
			left: 0;
		}
	}

	@media (max-width: 600px) {
		.sticky-content-wrapper {
			top: 9.5%;
			left: 9.5%;
			width: 81%;
			height: 81%;
		}

		.sticky-content {
			position: relative;
			width: 100%;
			height: 100%;
			background-size: 100% 100%;
		}
	}
</style>
