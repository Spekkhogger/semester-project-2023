import { base_API_URL } from "../constants.mjs";

export async function getProfile(){
    const queryString = document.location.search;
    const params = new URLSearchParams(queryString);
    const path = params.get("name").toLowerCase();
    const queryParam = "?_listings=true";
    const apiCall = base_API_URL + `profiles/` + path + queryParam ;

    console.log(apiCall);

    const response= await fetch (apiCall);
    const profileData = response.json(); 
    if (profileData.ok){
        console.log(profileData);
    }
}