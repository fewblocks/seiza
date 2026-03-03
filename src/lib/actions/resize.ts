export function resize(
	node: HTMLElement,
	callback?: (width: number, entry?: ResizeObserverEntry) => void
) {
	let cb = callback;
	const ro = new ResizeObserver((entries) => {
		for (const entry of entries) {
			const width = entry.contentRect?.width ?? node.clientWidth;
			if (typeof cb === 'function') cb(width, entry);
		}
	});
	ro.observe(node);
	return {
		update(newCallback?: (width: number, entry?: ResizeObserverEntry) => void) {
			cb = newCallback;
		},
		destroy() {
			ro.disconnect();
		}
	};
}
