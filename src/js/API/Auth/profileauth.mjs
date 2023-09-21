import { base_API_URL } from "../../constants.mjs";
import { loadKey } from "../../storage.mjs";

export async function fetchProfile(name){
    const key = loadKey("token");

    if (!key) {
        throw new Error ("Couldn't get token"); 
    }

    const apiCall = `${base_API_URL}profiles/${name}?_listings=true`;

    const response = await fetch (apiCall,{
        headers: {
            "Content-type": "application/json",
            "Authorization": `Bearer ${key}`
       },
    });

    const json = await response.json(); 
    if (response.ok) {
        return json; 
    }

}