import type { IOAuthResponse } from '$lib/interfaces/twitch';
import { OAUTH_CLIENT_SECRET } from "$env/static/private";
import { PUBLIC_OAUTH_CLIENT_ID } from "$env/static/public";

export async function GET(): Promise<Response> {
	
	return new Response('{ "access_token": "abc"}');
	
	// const response = await fetch(
	// 	`https://id.twitch.tv/oauth2/token?client_id=${PUBLIC_OAUTH_CLIENT_ID}&client_secret=${OAUTH_CLIENT_SECRET}&grant_type=client_credentials`,
	// 	{
	// 		method: 'POST'
	// 	}
	// );

	// const oauthResponse: IOAuthResponse = await response.json();

	// return new Response(JSON.stringify(oauthResponse));
}
