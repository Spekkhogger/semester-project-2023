import { base_API_URL } from "../../constants.mjs";
import { loadKey } from "../../storage.mjs";

const path = "listings/";
const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const queryID = params.get("id");
const queryParam = "?_seller=true&_bids=true"
const method = "POST"; 
const apiCall = base_API_URL + `${queryID}/bids`;

export async function newBidCall(bid) {
    const apiCall = base_API_URL + `${queryID}/bids`;
    const key = loadKey("token");
    
    const response = await fetch (apiCall, {
        headers: {
            "content-type": "application/json",
            "Authorization": `Bearer ${key}`
        },
        method,
        body: JSON.stringify({amount: bid})
    });

    if(response.ok){
        const result = await response.json();
        return result;
    }
    
    const json = await response.json();
    throw new Error(json.errors[0].message);
}