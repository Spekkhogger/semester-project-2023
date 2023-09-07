import { saveKey, loadKey, removeKey } from "./storage.mjs";

import { registrationSubmission } from "./handles/registration.mjs";
import { logInSubmission } from "./handles/login.mjs";
import { getAuctionsList } from "./API/Auth/getAuctionsList.mjs";



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
}