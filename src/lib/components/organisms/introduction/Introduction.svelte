<script lang="ts">
	import imageKaiten from '$lib/assets/kaiten_description.png';
	import imageArrow from '$lib/assets/arrow_description.png';
	import imageKotei from '$lib/assets/kotei_description.png';
	import { withBase } from '$lib/utils';
	import * as Card from '$lib/components/ui/card';
	import * as Item from '$lib/components/ui/item';

	let hoveredItem = $state<'kaiten' | 'kotei' | null>(null);
</script>

<article class="space-y-8">
	<header class="text-center">
		<h1 class="text-4xl font-bold tracking-tight">星座早見盤</h1>
		<p class="text-muted-foreground mt-2">インタラクティブな星座観測ツール</p>
	</header>

	<div class="grid gap-6 md:grid-cols-2">
		<Card.Root>
			<Card.Header>
				<Card.Title id="about-heading">このアプリについて</Card.Title>
			</Card.Header>
			<Card.Content>
				<p class="text-sm leading-relaxed">
					星座早見盤を回転させて、現在の夜空にどの星座が見えるかを確認できるツールです。
					回転させると、星座の名前や説明が表示されます。
				</p>
			</Card.Content>
		</Card.Root>

		<Card.Root>
			<Card.Header>
				<Card.Title id="usage-heading">使い方</Card.Title>
			</Card.Header>
			<Card.Content>
				<p class="text-sm leading-relaxed">
					星座早見盤をドラッグして回転させると、現在の夜空にどの星座が見えるかを確認できます。
					回転させると、星座の名前や説明が表示されます。
				</p>
			</Card.Content>
		</Card.Root>
	</div>

	<Card.Root>
		<Card.Header>
			<Card.Title id="structure-heading">星座早見盤の作り</Card.Title>
		</Card.Header>
		<Card.Content class="space-y-4">
			<p class="text-sm leading-relaxed">
				星座早見盤は2枚の円盤が重なってできています。
				上の円盤には方角や時刻、下の円盤には日付や星・星座などが書かれています。
				基本的には早見盤を回して、「日付」と「時刻」を合わせることで、その時見られる星を調べることができます。
			</p>
			<figure class="rounded-lg overflow-hidden border">
				<figcaption class="text-xs text-center text-muted-foreground py-2 bg-muted">
					星座早見盤の構造
				</figcaption>
				<div class="grid grid-cols-12 gap-6">
					<div class="col-span-12 sm:col-span-6 aspect-square image-container">
						<img
							src={withBase(imageKaiten)}
							alt="星座早見盤の下の円盤の説明図"
							class="image-layer"
							class:glowing={hoveredItem === 'kaiten'}
						/>
						<img
							src={withBase(imageArrow)}
							alt="星座早見盤の矢印部分の説明図"
							class="image-layer"
						/>
						<img
							src={withBase(imageKotei)}
							alt="星座早見盤の固定部分の説明図"
							class="image-layer"
							class:glowing={hoveredItem === 'kotei'}
						/>
					</div>
					<div class="col-span-12 sm:col-span-6 space-y-4">
						<Item.Root
							class="py-2 px-2 mx-2 my-2 border rounded-lg cursor-pointer"
							onmouseenter={() => (hoveredItem = 'kaiten')}
							onmouseleave={() => (hoveredItem = null)}
						>
							<Item.Content>
								<Item.Title>下の円盤</Item.Title>
								<Item.Description>
									星座早見盤の下の円盤の部分です。これを回すことで、現在の夜空にどの星座が見えるかを確認できます。
								</Item.Description>
							</Item.Content>
						</Item.Root>

						<Item.Root
							class="py-2 px-2 mx-2 my-2 border rounded-lg cursor-pointer"
							onmouseenter={() => (hoveredItem = 'kotei')}
							onmouseleave={() => (hoveredItem = null)}
						>
							<Item.Content>
								<Item.Title>上の円盤</Item.Title>
								<Item.Description>
									星座早見盤の上の円盤の部分には、日付や時刻、方角などが書かれています。これらを基準にして、回転部分を合わせることで、その時見られる星を調べることができます。
								</Item.Description>
							</Item.Content>
						</Item.Root>
					</div>
				</div>
			</figure>
		</Card.Content>
	</Card.Root>
</article>

<style>
	.image-container {
		position: relative;
	}

	.image-layer {
		position: absolute;
		inset: 0;
		width: 100%;
		height: 100%;
		object-fit: contain;
		transition: filter 0.3s ease;
	}

	.image-layer:nth-child(1) {
		filter: drop-shadow(-22px 31px 10px #000000);
	}

	.image-layer:nth-child(2) {
		filter: drop-shadow(-10px 10px 10px #000000);
	}

	.image-layer:nth-child(3) {
		filter: drop-shadow(-22px 31px 30px #000000);
	}

	.glowing {
		animation: pulse-glow 0.8s ease-in-out infinite;
	}

	@keyframes pulse-glow {
		0%,
		100% {
			filter: drop-shadow(0 0 10px rgba(255, 215, 0, 0.6)) brightness(1.2);
		}
		50% {
			filter: drop-shadow(0 0 30px rgba(255, 215, 0, 1)) brightness(1.6);
		}
	}
</style>
