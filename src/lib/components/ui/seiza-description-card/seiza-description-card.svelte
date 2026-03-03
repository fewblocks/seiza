<script lang="ts">
	import * as Card from '$lib/components/ui/card';
	import stendGlassSkelton from '$lib/assets/stend-glass-skelton.png';

	type Props = {
		name: string;
		description: string;
	};

	let { name, description }: Props = $props();
	let displayedDescription = $state('');

	$effect(() => {
		// nameまたはdescriptionが変更されるたびにリセット
		const currentName = name;
		const currentDescription = description;

		displayedDescription = '';
		let currentIndex = 0;

		const interval = setInterval(() => {
			if (currentIndex < currentDescription.length) {
				displayedDescription = currentDescription.slice(0, currentIndex + 1);
				currentIndex++;
			} else {
				clearInterval(interval);
			}
		}, 100);

		return () => clearInterval(interval);
	});
</script>

<Card.Root
	class="w-full h-full flex items-center justify-center flex-col"
	style="background-image: url({stendGlassSkelton}); 
	background-size: cover; 
	background-position: center;
	box-shadow:0px 0px 10px 5px rgba(0, 0, 0, 0.5) inset;"
>
	<Card.Header>
		<Card.Title>{name}</Card.Title>
	</Card.Header>
	<Card.Content>
		<Card.Description class="text-sm leading-relaxed" style="color: white;">
			<p class="text-sm leading-relaxed"></p>
			{@html displayedDescription}
		</Card.Description>
	</Card.Content>
</Card.Root>
