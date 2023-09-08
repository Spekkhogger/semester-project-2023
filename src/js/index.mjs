import { saveKey, loadKey, removeKey } from "./storage.mjs";

import { registrationSubmission } from "./handles/registration.mjs";
import { logInSubmission } from "./handles/login.mjs";
import { getAuctionsList } from "./API/Auctions/getAuctionsList.mjs";
import { createItemElements } from "./API/Auctions/getItem.mjs";
import { getProfile } from "./profile/getProfile.mjs";



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
    case "/profile/":
        getProfile();
}