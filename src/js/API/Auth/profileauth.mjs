import { base_API_URL } from "../../constants.mjs";
import { loadKey } from "../../storage.mjs";

export async function getProfile(){
    const queryString = document.location.search;
    const params = new URLSearchParams(queryString);
    const path = params.get("name");
    const queryParam = "?_listings=true";
    const apiCall = base_API_URL + `profiles/` + path + queryParam ;
    const method = "get"; 
    const key = loadKey("token");

    const response = await fetch (apiCall,{
        headers: {
            "Content-type": "application/json",
            "Authorization": `Bearer ${key}`
       },
       method
    });
    const profileData = await response.json(); 
    return profileData; 
}