import type { RequestEvent } from '@sveltejs/kit';

export const GET = async (event: RequestEvent) => {
	const searchParams = event.url.searchParams;
	const state = searchParams.get('state');
	const authCode = searchParams.get('code');

	if (!state || !authCode || state !== event.cookies.get('spotifyState')) {
		return new Response('Invalid state', { status: 401 });
	}

	// TODO - Implement this
	// const token = await sendAccessTokenRequest(authCode);
	//
	// event.cookies.set('amazonAccessToken', token.accessToken, {
	//     path: '/',
	//     httpOnly: true,
	//     maxAge: token.expiresIn
	// });
	// event.cookies.set('amazonRefreshToken', token.refreshToken, {
	//     path: '/',
	//     httpOnly: true,
	//     maxAge: token.expiresIn + 1800
	// });

	return new Response();
};
