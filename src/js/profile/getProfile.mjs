import { base_API_URL } from "../constants.mjs";

export async function getProfile(){
    const apiCall = base_API_URL + `profiles`;
    const response= await fetch (apiCall);
    const profileData = response.json(); 
    console.log(profileData);
    if (profileData.ok){
        console.log(profileData);
    }
}