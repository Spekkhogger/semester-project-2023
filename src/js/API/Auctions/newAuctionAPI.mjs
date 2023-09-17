import { base_API_URL } from "../../constants.mjs";

const path = "listings"; 
const method = "POST"; 


export async function newAuctionAPI(data) {
    const apiCall = base_API_URL + path
    const response = await fetch (apiCall, {
        headers: {
            "content-type": "application/json"
        },
        method,
        body: JSON.stringify(data)
    });
    if (response.ok) {
        const result = await response.json();
        return result;
    }
    
    const json = await response.json();
    throw new Error(json.errors[0].message);
}