import { loadKey } from "../../storage.mjs";

const method = "put"; 

export async function authChangeProfile(newMedia) {
    const key = loadKey("token");

    if (!key) {
        throw new Error ("Couldn't get token"); 
    }

    const url = base_API_URL + "profiles/" + getProfileName() + "/media"; 

    const response = await fetch (url, {
        headers: {
            "Content-type": "application/json",
            "Authorization": `Bearer ${key}`
       },
       method,
       body: JSON.stringify(newMedia)
    });

    const json = await response.json();
    if (response.ok) {
        return json;
    }
}