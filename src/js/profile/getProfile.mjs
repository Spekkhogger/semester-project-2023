import { base_API_URL } from "../constants.mjs";

export async function getProfileName(name){
    const apiCall = base_API_URL + `profiles/${name}`;
    const profileData = await fetch (apiCall);

    if (profileData.ok){
        console.log(profileData);
    }
}