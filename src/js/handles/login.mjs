// Submission of login form

export function logInSubmission() {
    const logInForm = document.querySelector("#logInForm");
    logInForm.addEventListener("submit", async(event) => {
        event.preventDefault();
        const formData = new FormData(event.target); 
        const profile = Object.fromEntries(formData.entries());

        
    })
}


import { saveKey } from "../storage.mjs";
import { base_API_URL } from "../constants.mjs";
const path = "auth/login";
const method = "POST"; 