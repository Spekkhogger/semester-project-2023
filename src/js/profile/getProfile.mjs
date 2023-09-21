import { createImage } from "../helpers/createImages.mjs"; 
import { errorHandling } from "../helpers/errorHandling.mjs";
import { fetchProfile } from "../API/Auth/profileauth.mjs";
import { getParam } from "../helpers/getParam.mjs";
import { getProfileName } from "../helpers/getProfileName.mjs";

export async function createProfile(){
    const container = document.querySelector(".container");
    const profileImage = document.querySelector("#profileImage"); 
    const userName = document.querySelector("#profileName"); 
    const userCredits = document.querySelector("#credits");
    const numberOfAuctions = document.querySelector("#ongoingAuctionsNumber");

    let name = getParam("name"); 
    if (!name) {
        name = getProfileName();
    }
    if (!name) {
        return errorHandling(container, "Could not get profile name"); 
    }

    try {
        const profileData = await fetchProfile(name); 
        const auctionListings = profileData.listings;
        const editProfile = document.querySelector("#editButton")

        createImage(profileImage, profileData.avatar, 200); 
        userName.textContent = profileData.name; 
        userCredits.textContent += profileData.credits; 
        numberOfAuctions.textContent += profileData.listings.length;

        // Create log out button
        if (profileData.name !== getProfileName()) {
            editProfile.style.display = "none"; 
        }

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
            wrap.style.padding = "10px";
            wrap.style.backgroundColor = "white";
        });





    } catch (error) {
        errorHandling(container, error); 
    }

}