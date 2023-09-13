import { getAuctionsList } from "../API/Auctions/getAuctionsList.mjs";
import { createImage } from "../helpers/createImages.mjs";

export function searchAuctions () {
    const searchInput = document.querySelector("#searchAuctions");
    const auctionsContainer = document.querySelector(".listingContainer");

    searchInput.addEventListener("keyup", async e => {
        const itemData = await getAuctionsList(); 
        let currentValue = e.target.value.toLowerCase();
        console.log(currentValue);
        let matchedItems = itemData.filter(function(item) {
            const itemTitle = item.title.toLowerCase();
            return itemTitle.startsWith(currentValue) || itemTitle.includes(currentValue);
        })
        showSearchResult(matchedItems); 
    })

}

function showSearchResult(results) {
    const auctionsContainer = document.querySelector(".listingContainer");
    if (results.length === 0) {
        const noResults = document.createElement("div");
        noResults.textContent = "No matches";
        auctionsContainer.appendChild(noResults); 
    } else {
        auctionsContainer.textContent = "";
        for (let i = 0; i < results.length; i++) {
            const result = results[i]; 
            const path = result.id;
            const url = "../../../auction/?id=" + path; 

            const itemCard = document.createElement("a");
            itemCard.setAttribute("href", url);
            itemCard.classList.add("card", "m-3"); 
            createImage(itemCard, result.media[0], 200);

            const itemTitle = document.createElement("h1");
            const itemDescription = document.createElement("p");
            itemTitle.textContent = result.title;
            itemDescription.textContent = result.description;

            itemCard.appendChild(itemTitle); 
            itemCard.appendChild(itemDescription); 
            

            auctionsContainer.appendChild(itemCard)
        }
    }

}