import type { Actions, RequestEvent } from '@sveltejs/kit';
import { redirect } from '@sveltejs/kit';
import { GetAmazonLoginUrl } from '$lib/services/spotify/authService';

export const actions = {
	default: async (event: RequestEvent) => {
		const state = generateRandomString();
		event.cookies.set('spotifyState', state);
		throw redirect(303, GetAmazonLoginUrl(state));
	}
} satisfies Actions;

const generateRandomString = (): string => {
	const byteArray = new Uint8Array(32);
	crypto.getRandomValues(byteArray);
	return Array.from(byteArray)
		.map((byte) => byte.toString(16).padStart(2, '0'))
		.join('');
};
