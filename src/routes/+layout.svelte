<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';
	import { base } from '$app/paths';
	import '../app.css';
	import * as Navigation from '$lib/components/ui/navigation';
	import StarryBackground from '$lib/components/ui/StarryBackground.svelte';

	let { children } = $props();

	const navItems = [
		{ href: '/', title: '星座早見盤' },
		{ href: '/fortune-telling', title: '占い' },
		{ href: '/profile', title: 'プロフィール' }
	];
</script>

{#snippet NavItem({
	href,
	title,
	class: className
}: {
	href: string;
	title: string;
	class?: string;
})}
	<Navigation.Item>
		<Navigation.Link {href} class={className}>{title}</Navigation.Link>
	</Navigation.Item>
{/snippet}

<svelte:head>
	<link rel="icon" href={favicon.startsWith('data:') ? favicon : base + favicon} />
</svelte:head>

<StarryBackground />

<Navigation.Root>
	<Navigation.List>
		{#each navItems as item (item.href)}
			{@render NavItem({ href: item.href, title: item.title })}
		{/each}
	</Navigation.List>
</Navigation.Root>

{@render children()}
