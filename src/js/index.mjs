import { saveKey, loadKey, removeKey } from "./storage.mjs";

import { registrationSubmission } from "./handles/registration.mjs";
import { logInSubmission } from "./handles/login.mjs";



const path = location.pathname;

switch (path) {
    case "/":
        console.log("Hello");
        registrationSubmission();
        logInSubmission();
}