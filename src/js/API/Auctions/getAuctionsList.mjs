import { base_API_URL } from "../../constants.mjs";
import { errorHandling } from "../../helpers/errorHandling.mjs";

export async function getAuctionsList() {
    const apiCall = base_API_URL + `listings`;

    try {
        const auctionsResponse = await fetch (apiCall);
        const auctionsData = await auctionsResponse.json();
        
        return auctionsData;

    } catch (error) {
        console.log(error) 
        const container = document.querySelector(".container");
        errorHandling(container, error); 
    }

}

