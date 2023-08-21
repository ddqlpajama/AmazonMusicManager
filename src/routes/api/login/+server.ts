import type { RequestEvent } from '@sveltejs/kit';
import { sendAccessTokenRequest } from '$lib/services/amazon/tokenService';

export const POST = async (event: RequestEvent) => {
	const authCode = await event.request.text();
	const amazonToken = await sendAccessTokenRequest(authCode);

	// Set the token in the cookie
	event.cookies.set('amazonAccessToken', amazonToken.accessToken, {
		path: '/',
		httpOnly: true,
		maxAge: amazonToken.expiresIn
	});
	event.cookies.set('amazonRefreshToken', amazonToken.refreshToken, {
		path: '/',
		httpOnly: true,
		maxAge: amazonToken.expiresIn + 1800
	});

	return new Response();
};
