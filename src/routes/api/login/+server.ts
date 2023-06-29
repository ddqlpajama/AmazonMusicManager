import { PUBLIC_LWA_CLIENT_ID } from '$env/static/public';
import {LWA_CLIENT_SECRET_ID} from '$env/static/private';
import { error } from '@sveltejs/kit';

const amazonUrl = 'https://api.amazon.com/auth/o2/token';

export const POST = async ({request}) => {
    const response = await sendAccessTokenRequest(request);
    if (!response.ok) {
        throw error(400, 'Failed to authenticate user');
    }
    
    

    console.log(await response.json());
    return new Response();
}

const sendAccessTokenRequest = async (request: Request) => {
    const authCode = await request.text();
    const accessTokenReqBody = {
        'grant_type': 'authorization_code',
        'code': authCode,
        'client_id': PUBLIC_LWA_CLIENT_ID,
        'client_secret': LWA_CLIENT_SECRET_ID
    }

    const response = await fetch(amazonUrl, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(accessTokenReqBody)
    });

    return response;
}