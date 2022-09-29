import type { LoadEvent } from "@sveltejs/kit";
import { PUBLIC_OAUTH_CLIENT_ID } from "$env/static/public";
import { token } from "$lib/stores/token";

export async function load({ fetch }: LoadEvent): Promise<unknown> {

    const serverResponse = await fetch("/api/get-oauth-token");
    const oauth = await serverResponse.json();

    token.set(oauth.access_token);

    // const query = "fields name, rating; limit 10; where rating > 95; sort rating desc;";

    // const gameResponse = await fetch("https://api.igdb.com/v4/games/",{
    //     body: query,
    //     method: "POST",
    //     headers:{
    //         "Client-ID": PUBLIC_OAUTH_CLIENT_ID,
    //         "Authorization": "Bearer " + oauthResponse.access_token
    //     }
    // });

    // const gamesJson = await gameResponse.json();

    // return gamesJson;

    return "";
  }