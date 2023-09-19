import { loadKey } from "../storage.mjs";
import { createImage } from "../helpers/createImages.mjs"; 
import { errorHandling } from "../helpers/errorHandling.mjs";
import { getProfile } from "../API/Auth/profileauth.mjs";

export async function createProfile(){
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

        // Listings section: 
        const auctionsTab = document.querySelector("#auctionsTab");
        const winTab = document.querySelector("#winTab");

        auctionListings.forEach(item => {
            const wrap = document.createElement("a");
            wrap.href = `../../../auction/?id=${item.id}`
            wrap.classList.add("rounded", "m-3"); 
            createImage(wrap, item.media[0], 250);
            const title = document.createElement("p");
            title.textContent = item.title;
            auctionsTab.appendChild(wrap); 
            wrap.appendChild(title); 
            wrap.style.padding = "10px"
            wrap.style.backgroundColor = "white"
        });





    } catch (error) {
        errorHandling(container, error); 
    }

}