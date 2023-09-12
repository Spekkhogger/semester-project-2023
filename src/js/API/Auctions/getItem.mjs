import { base_API_URL } from "../../constants.mjs";
import { createImage } from "../../helpers/createImages.mjs";

export async function getAuctionItem() {
    const queryString = document.location.search;
    const params = new URLSearchParams(queryString);
    const queryID = params.get("id");
    const queryParam = "?_seller=true&_bids=true"

    const apiCall = base_API_URL + "listings/" + queryID + queryParam;

    const response = await fetch (apiCall);
    const result = response.json(); 
    return result;
}

export async function createItemElements() {
    const sellerImage = document.querySelector("#sellerImage");
    const sellerName = document.querySelector("#sellerName");
    const productImage = document.querySelector("#productImage");
    const productTitle = document.querySelector("#productTitle");
    const highestBid = document.querySelector("#highestBid");
    const productDescription = document.querySelector("#productDescription");

    const itemData = await getAuctionItem();
    createImage(productImage, itemData.media[0], 300);
    createImage(sellerImage, itemData.seller.avatar, 50);
    sellerName.textContent = itemData.seller.name;
    sellerName.href = `../../../../profile/?name=${itemData.seller.name}`;
    productTitle.textContent = itemData.title; 
    
    if (itemData.bids.length === 0){
        highestBid.textContent = "No bids yet";
    } else {
        highestBid.textContent += itemData.bids[itemData.bids.length -1].amount;
    }

    productDescription.textContent = itemData.description;
}