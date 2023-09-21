import { saveKey, loadKey, removeKey } from "./storage.mjs";

import { registrationSubmission } from "./handles/registration.mjs";
import { logInSubmission } from "./handles/login.mjs";
import { createItemElements } from "./auction/auctionItem.mjs";
import { createProfile } from "./profile/getProfile.mjs";
import { createAuctionList } from "./auction/createAuctionList.mjs";
import { searchAuctions } from "./search/searchList.mjs";
import { createNewAuction } from "./auction/createNewAuction.mjs";
import { createNav } from "./menu/createNav.mjs";


const path = location.pathname;

createNav();

switch (path) {
    case "/":
    case "/index.html":
        registrationSubmission();
        logInSubmission();
        break;
    case "/auctions/": 
        createAuctionList();
        searchAuctions();
        break; 
    case "/auction/":
        createItemElements();
        break;
    case "/profile/":
        createProfile();
        break;
    case "/new-auction/":
        createNewAuction();
        break; 
}