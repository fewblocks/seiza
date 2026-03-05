export const prerender = true;

export function GET() {
	return new Response(null, {
		status: 302,
		headers: {
			// use a relative redirect so it resolves under the current base path
			Location: 'favicon.svg'
		}
	});
}
