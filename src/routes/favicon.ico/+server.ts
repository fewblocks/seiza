export const prerender = true;

import { base } from '$app/paths';

export function GET() {
	return new Response(null, {
		status: 302,
		headers: {
			Location: base + '/favicon.svg'
		}
	});
}
