import { getAuctionsList } from "../API/Auctions/getAuctionsList.mjs";

export function searchAuctions () {
    const searchInput = document.querySelector("#searchAuctions");
    const auctionsContainer = document.querySelector(".listingContainer");

    searchInput.addEventListener("keyup", async e => {
        const itemData = await getAuctionsList(); 
        let currentValue = e.target.value.toLowerCase();
        let matchedItems = itemData.filter(function(item) {
            const itemTitle = itemData.title.toLowerCase();
            return itemTitle.startsWith(currentValue) || itemTitle.includes(currentValue);
        })
    })

    showSearchResult(matchedItems); 
}

function showSearchResult(results) {


    const auctionsContainer = document.querySelector(".listingContainer");
    if (results.length === 0) {
        const noResults = document.createElement("div");
        noResults.textContent = "No matches";
        auctionsContainer.appendChild(noResults); 
    } else {
        
    }

}