import { removeKey } from "../storage.mjs";
import { createNav } from "../menu/createNav.mjs";

const button = document.querySelector("#logOutButton"); 

export function logOut() {
    button.addEventListener("click", function(){
        removeKey("token");
        removeKey("profile");
        window.location.replace("../../../");
        createNav();
    })
}