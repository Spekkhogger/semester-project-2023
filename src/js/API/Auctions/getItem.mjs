import { base_API_URL } from "../../constants.mjs";

export async function getAuctionItem() {
    const queryString = document.location.search;
    const params = new URLSearchParams(queryString);
    const queryID = params.get("id");
    const queryParam = "?_seller=true&_bids=true"

    const apiCall = base_API_URL + "listings/" + queryID + queryParam;

    const response = await fetch (apiCall);
    const result = await response.json(); 
    return result;
}