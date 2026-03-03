<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';
	import { cn } from '$lib/utils';

	type $$Props = HTMLAttributes<HTMLLIElement>;

	let className: $$Props['class'] = undefined;
	export { className as class };
</script>

<li class={cn('flex-1 border-2 border-border', className)} {...$$restProps}>
	<slot />
</li>
