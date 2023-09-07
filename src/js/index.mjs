import { saveKey, loadKey, removeKey } from "./storage.mjs";

import { registrationSubmission } from "./handles/registration.mjs";
import { logInSubmission } from "./handles/login.mjs";
import { getAuctionsList } from "./API/Auctions/getAuctionsList.mjs";
import { getAuctionItem } from "./API/Auctions/getItem.mjs";
import { createItemElements } from "./API/Auctions/getItem.mjs";



const path = location.pathname;

switch (path) {
    case "/":
    case "/index.html":
        console.log("Hello");
        registrationSubmission();
        logInSubmission();
        break;
    case "/auctions/":
        getAuctionsList();
        break;
    case "/auction/":
        createItemElements();
        break;
}