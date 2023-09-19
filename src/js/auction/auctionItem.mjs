import { getAuctionItem } from "../API/Auctions/getItem.mjs";
import { createImage } from "../helpers/createImages.mjs";
import { loadKey } from "../storage.mjs";

export async function createItemElements() {

    // Get the relevant elements
    const sellerImage = document.querySelector("#sellerImage");
    const sellerName = document.querySelector("#sellerName");
    const productImage = document.querySelector("#productImage");
    const productTitle = document.querySelector("#productTitle");
    const highestBid = document.querySelector("#highestBid");
    const productDescription = document.querySelector("#productDescription");
    const bidButton = document.querySelector("#bidButton"); 
    const message = document.querySelector("#errorMessage");

    // Load data and create elements 
    const itemData = await getAuctionItem();
    console.log(itemData); 
    createImage(productImage, itemData.media[0], 300);
    createImage(sellerImage, itemData.seller.avatar, 50);
    sellerName.textContent = itemData.seller.name;
    sellerName.href = `../../../../profile/?name=${itemData.seller.name}`;
    productTitle.textContent = itemData.title; 
    
    // Display the current bid
    if (itemData.bids.length === 0){
        highestBid.textContent = "No bids yet";
    } else {
        highestBid.textContent += itemData.bids[itemData.bids.length -1].amount;
    }

    productDescription.textContent = itemData.description;


    // Make sure seller and highest bidder cannot bid on item.
    const highestBidder = itemData.bids[itemData.bids.length -1].bidderName;
    const userName = loadKey("profile").name; 
    if (highestBidder === userName) {
        bidButton.classList.add("disabled"); 
        message.textContent = "You have the highest bid!"
    } else if (userName === sellerName){
        bidButton.style.display = "none";  
    }
}