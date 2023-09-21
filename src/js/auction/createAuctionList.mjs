import { getAuctionsList } from "../API/Auctions/getAuctionsList.mjs";

export async function createAuctionList() {
    const auctionsData = await getAuctionsList(); 

    const container = document.querySelector(".listingContainer");

    auctionsData.forEach((i) => {
        const newDiv = document.createElement("div");

        if (i.media[0] === undefined) {
            i.media[0] = "../../../../images/cherry_1791356 noimage.png"
        }

        const title = i.title;
        const image = i.media[0]; 
        const description = i.description;
        const id = i.id;


        newDiv.innerHTML = 
        `
        <a href="../../../../auction/?id=${id}" id="auctionItem" class="card-body">
            <img src="${image}" class="card-img-top" alt="Image of ${title}" style="object-fit: cover; height: 200px;">
            <h2 class="card-title">${title}</h2>
            <p class="card-text">${description}</p>

        </a>
        `;

        newDiv.classList.add("card", "m-3");
        container.append(newDiv);
    });
}