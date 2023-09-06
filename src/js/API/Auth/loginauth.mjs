import { saveKey } from "../../storage.mjs";
import { base_API_URL } from "../../constants.mjs";
const path = "auth/login";
const method = "POST"; 

export async function logInAccount(profile){
    const apiCall = base_API_URL + path; 
    const response = await fetch(apiCall, {
        headers: {
             "Content-type": "application/json"
        },
        method,
        body: JSON.stringify(profile)
    });

    if(response.ok) {
        const {accessToken, ...user} = await response.json();
        saveKey("token", accessToken);
        saveKey("profile", user);
    }

    const json = await response.json();
    throw new Error(json.errors[0].message);
}