import { base_API_URL } from "../constants.mjs";
import { loadKey } from "../storage.mjs";
import { createImage } from "../helpers/createImages.mjs"; 

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

export async function createProfile(){
    const errorMessage = document.querySelector(".errorContainer");
    const container = document.querySelector(".container");
    const profileImage = document.querySelector("#profileImage"); 
    const userName = document.querySelector("#profileName"); 
    const userCredits = document.querySelector("#credits");
    const numberOfAuctions = document.querySelector("#ongoingAuctionsNumber");

    try {
        const profileData = await getProfile(); 
        console.log(profileData);
        createImage(profileImage, profileData.avatar, 200); 
        userName.textContent = profileData.name; 
        userCredits.textContent += profileData.credits; 
        numberOfAuctions.textContent += profileData.listings.length;
        

    } catch (error) {
        errorMessage.textContent = "Something went wrong";
        container.style.display = "none";  
    }

}