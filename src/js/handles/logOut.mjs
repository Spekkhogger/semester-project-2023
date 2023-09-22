import { removeKey } from "../storage.mjs";

const button = document.querySelector("#logOutButton"); 

export function logOut() {
    button.addEventListener("click", function(){
        removeKey();
        window.location.replace("../../../");
    })
}