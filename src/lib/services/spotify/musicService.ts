import { SPOTIFY_CLIENT_SECRET_ID } from '$env/static/private';

const amazonMusicUrl = 'https://api.music.amazon.dev';

const getCurrentUser = async (authToken: string) => {
	const response = await fetch(`${amazonMusicUrl}/users/me`, {
		headers: {
			'x-api-key': SPOTIFY_CLIENT_SECRET_ID,
			Authorization: `Bearer ${authToken}`
		}
	});

	return response.json();
};

export { getCurrentUser };
