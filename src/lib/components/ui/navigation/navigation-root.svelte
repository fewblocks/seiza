<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';
	import { cn } from '$lib/utils';

	type $$Props = HTMLAttributes<HTMLElement>;

	let className: $$Props['class'] = undefined;
	export { className as class };
</script>

<nav class={cn('w-full  bg-navigation text-navigation-foreground', className)} {...$$restProps}>
	<slot />
</nav>
