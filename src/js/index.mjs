import { saveKey, loadKey, removeKey } from "./storage.mjs";

import { registrationSubmission } from "./handles/registration.mjs";
import { logInSubmission } from "./handles/login.mjs";
import { createItemElements } from "./API/Auctions/getItem.mjs";
import { createProfile } from "./profile/getProfile.mjs";
import { createAuctionList } from "./auction/createAuctionList.mjs";

const path = location.pathname;

switch (path) {
    case "/":
    case "/index.html":
        console.log("Hello");
        registrationSubmission();
        logInSubmission();
        break;
    case "/auctions/":
        createAuctionList();
        break;
    case "/auction/":
        createItemElements();
        break;
    case "/profile/":
        createProfile();
        break;
}