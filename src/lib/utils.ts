import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { fortuneTellingData } from './data/fortune-telling-data.js';
import { base } from '$app/paths';

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

// 今日の占いデータを取得
export function getTodayFortune() {
	const today = new Date();
	const dayOfMonth = today.getDate(); // 1-31
	const year = today.getFullYear();
	const month = today.getMonth() + 1; // 0-11なので+1

	// インデックスは0始まりなので-1、31日以上の場合は31日のデータを使用
	const dataIndex = Math.min(dayOfMonth, 31) - 1;
	const todayFortune = fortuneTellingData[dataIndex];

	return {
		year,
		month,
		dayOfMonth,
		todayFortune
	};
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type WithoutChild<T> = T extends { child?: any } ? Omit<T, 'child'> : T;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type WithoutChildren<T> = T extends { children?: any } ? Omit<T, 'children'> : T;
export type WithoutChildrenOrChild<T> = WithoutChildren<WithoutChild<T>>;
export type WithElementRef<T, U extends HTMLElement = HTMLElement> = T & { ref?: U | null };

/**
 * Prefix a path with the configured `base` unless it's an absolute URL or a data URL.
 */
export function withBase(path?: string | null) {
	if (!path) return path;
	if (path.startsWith('data:') || path.startsWith('http') || path.startsWith(base)) return path;
	return base + (path.startsWith('/') ? path : '/' + path);
}

/**
 * Compatibility wrapper named `resolve` for linters/rules that expect a `resolve()` call.
 */
export function resolve(path?: string | null) {
	return withBase(path);
}
