import { writable } from 'svelte/store';

export const tooltipText = writable('');
export const tooltipId = writable('');
export const tooltipX = writable(0);
export const tooltipY = writable(0);
