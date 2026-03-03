<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';
	import { cn } from '$lib/utils';

	type $$Props = HTMLAttributes<HTMLAnchorElement> & {
		href?: string;
	};

	let className: $$Props['class'] = undefined;
	export { className as class };
	export let href: string | undefined = undefined;
</script>

<a
	{href}
	class={cn(
		'w-full text-center block py-2 px-4 no-underline text-foreground hover:bg-accent transition-colors',
		className
	)}
	{...$$restProps}
>
	<slot />
</a>
