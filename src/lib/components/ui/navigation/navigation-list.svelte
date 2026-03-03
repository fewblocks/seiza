<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';
	import { cn } from '$lib/utils';

	type $$Props = HTMLAttributes<HTMLUListElement>;

	let className: $$Props['class'] = undefined;
	export { className as class };
</script>

<ul
	class={cn('w-full flex justify-between items-stretch list-none p-0 m-0', className)}
	{...$$restProps}
>
	<slot />
</ul>
