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

        const auctionListings = profileData.listings;

        createImage(profileImage, profileData.avatar, 200); 
        userName.textContent = profileData.name; 
        userCredits.textContent += profileData.credits; 
        numberOfAuctions.textContent += profileData.listings.length;
        console.log(auctionListings);

        // Listings section: 
        const auctionsTab = document.querySelector("#auctionsTab");
        const winTab = document.querySelector("#winTab");

        auctionListings.forEach(item => {
            const wrap = document.createElement("a");
            wrap.href = `../../../auction/?id=${item.id}`
            wrap.classList.add("m-3"); 
            createImage(wrap, item.media[0], 250);
            const title = document.createElement("p");
            title.textContent = item.title;
            auctionsTab.appendChild(wrap); 
            wrap.appendChild(title); 
        });





    } catch (error) {
        errorMessage.textContent = "Oopsiewoopsie, something went wrong: " + error;
        container.style.display = "none";
    }

}