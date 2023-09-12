import { getAuctionsList } from "../API/Auctions/getAuctionsList.mjs";

export function searchAuctions () {
    const searchInput = document.querySelector("#searchAuctions");
    const auctionsContainer = document.querySelector(".listingContainer");

    searchInput.addEventListener("keyup", async e => {
        const itemData = await getAuctionsList(); 
    })
}