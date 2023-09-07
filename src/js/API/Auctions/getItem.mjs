import { base_API_URL } from "../../constants.mjs";


const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const queryID = params.get("id");

export async function getAuctionItem(queryID) {
    const path = "listings/";
    const apiCall = base_API_URL + path + id;

    const response = await fetch (apiCall);
    const result = response.json; 
    console.log(result); 
}
