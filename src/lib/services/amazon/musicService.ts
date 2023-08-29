import { AMAZON_PROFILE_ID } from '$env/static/private';

const amazonMusicUrl = 'https://api.music.amazon.dev';

const getCurrentUser = async (authToken: string) => {
	const response = await fetch(`${amazonMusicUrl}/users/me`, {
		headers: {
			'x-api-key': AMAZON_PROFILE_ID,
			Authorization: `Bearer ${authToken}`
		}
	});

	return response.json();
};

export { getCurrentUser };
