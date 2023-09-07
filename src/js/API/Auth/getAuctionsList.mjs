import { base_API_URL } from "../../constants.mjs";

const container = document.querySelector(".listingContainer");

export async function getAuctionsList() {
    const apiCall = base_API_URL + `listings`;

    const auctionsResponse = await fetch (apiCall);
    const auctionsData = await auctionsResponse.json();

    auctionsData.forEach((i) => {
        const newDiv = document.createElement("a");

        if (i.media[0] === undefined) {
            i.media[0] = "../../../../images/logo/cherry_1791356.png"
        }

        console.log(i);

        newDiv.innerHTML = `
        <img src="${i.media[0]}" class="card-img-top">
        <h2 class="card-title">${i.title}</h2>
        <p class="card-text">${i.description}</p>
        `;
        newDiv.classList.add("card", "m-3");

        container.append(newDiv);
    });
}

