import { error } from '@sveltejs/kit';
import { PUBLIC_SPOTIFY_CLIENT_ID } from '$env/static/public';
import { SPOTIFY_CLIENT_SECRET_ID } from '$env/static/private';

const amazonAuthUrl = 'https://api.amazon.com/auth/o2/token';

interface AmazonTokenResponse {
	access_token: string;
	refresh_token: string;
	token_type: string;
	expires_in: number;
}

const transformTokenResponse = (response: AmazonTokenResponse): LoginToken => {
	return {
		accessToken: response.access_token,
		refreshToken: response.refresh_token,
		tokenType: response.token_type,
		expiresIn: response.expires_in
	};
};

export interface LoginToken {
	accessToken: string;
	refreshToken: string;
	tokenType: string;
	expiresIn: number;
}

export const sendAccessTokenRequest = async (authCode: string): Promise<LoginToken> => {
	const accessTokenReqBody = {
		grant_type: 'authorization_code',
		code: authCode,
		client_id: PUBLIC_SPOTIFY_CLIENT_ID,
		client_secret: SPOTIFY_CLIENT_SECRET_ID
	};

	const response = await fetch(amazonAuthUrl, {
		method: 'POST',
		headers: {
			'content-type': 'application/json'
		},
		body: JSON.stringify(accessTokenReqBody)
	});

	if (!response.ok) {
		throw error(400, 'Failed to authenticate user');
	}

	const tokenResponse: AmazonTokenResponse = await response.json();
	return transformTokenResponse(tokenResponse);
};
