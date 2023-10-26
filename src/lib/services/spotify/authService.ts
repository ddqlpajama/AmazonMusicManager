/* eslint-disable @typescript-eslint/no-explicit-any */
// noinspection JSUnresolvedReference

import { PUBLIC_SPOTIFY_CLIENT_ID } from '$env/static/public';

interface LoginRequestOptions {
	response_type: string;
	redirect_uri: string;
	state: string;
	scope: string;
}

const GetAmazonLoginUrl = (state: string): URL => {
	const authorizationUrl = 'https://accounts.spotify.com/authorize';
	const queryParams = new URLSearchParams({
		client_id: PUBLIC_SPOTIFY_CLIENT_ID,
		scope: 'user-read-private user-read-email',
		response_type: 'code',
		state: state,
		redirect_uri: 'http://localhost:5173/api/login/callback'
	});

	return new URL(`${authorizationUrl}?${queryParams.toString()}`);
};

export { type LoginRequestOptions, GetAmazonLoginUrl };
