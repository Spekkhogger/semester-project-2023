import { base_API_URL } from "../../constants.mjs";

const container = document.querySelector(".listingContainer");

export async function getAuctionsList() {
    const apiCall = base_API_URL + `listings`;

    try {
        const auctionsResponse = await fetch (apiCall);
        const auctionsData = await auctionsResponse.json();
    
        auctionsData.forEach((i) => {
            const newDiv = document.createElement("div");
    
            if (i.media[0] === undefined) {
                i.media[0] = "../../../../images/logo/cherry_1791356.png"
            }
    
            const title = i.title;
            const image = i.media[0]; 
            const description = i.description;
            const id = i.id;
    
            console.log(i);
    
            newDiv.innerHTML = 
            `
            <a href="../../../../auction/?id=${id}" id="auctionItem" class="card-body">
                <img src="${image}" class="card-img-top" alt="Image of ${title}"
                <h1 class="card-title">${title}</h1>
                <p class="card-text">${description}</p>
    
            </a>
            `;
    
            newDiv.classList.add("card", "m-3");
            container.append(newDiv);
        });
    } catch (error) {
        console.log(error) 
        // To be fixed
    }

}

