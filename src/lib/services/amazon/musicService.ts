import { PUBLIC_LWA_CLIENT_ID } from '$env/static/public';

const amazonMusicUrl = 'https://api.music.amazon.dev';

const getCurrentUser = async (authToken: string) => {
	const response = await fetch(`${amazonMusicUrl}/users/me`, {
		headers: {
			'x-api-key': PUBLIC_LWA_CLIENT_ID,
			Authorization: `Bearer ${authToken}`
		}
	});

	return response.json();
};

export { getCurrentUser };
