/* eslint-disable @typescript-eslint/no-explicit-any */
// noinspection JSUnresolvedReference

import { PUBLIC_LWA_CLIENT_ID } from '$env/static/public';

export interface LoginRequestOptions {
	scope: string;
	response_type: string;
	state: string;
}

export const GetAmazonLoginToken = (state: string, options: LoginRequestOptions) => {
	return window.amazon.Login.authorize(options, async (response: any) => {
		if (response.error) {
			alert('oauth error ' + response.error);
			return;
		}
		if (response.state != state) {
			alert('CSRF attempt detected');
			return;
		}

		const loginResponse = await fetch('/api/login', {
			method: 'POST',
			body: response.code,
			headers: {
				'content-type': 'text/plain'
			}
		});

		if (!loginResponse.ok) {
			alert('login failed');
			return;
		}

		return await loginResponse.json();
	});
};

export const SetAmazonApi = () => {
	window.onAmazonLoginReady = function () {
		window.amazon.Login.setClientId(PUBLIC_LWA_CLIENT_ID);
	};
};
