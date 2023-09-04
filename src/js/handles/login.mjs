// Submission of login form

export function logInSubmission() {
    const logInForm = document.querySelector("#logInForm");
    logInForm.addEventListener("submit", async(event) => {
        event.preventDefault();
        const formData = new FormData(event.target); 
        const profile = Object.fromEntries(formData.entries());

        await logInAccount(profile); 
    })
}


import { saveKey } from "../storage.mjs";
import { base_API_URL } from "../constants.mjs";
const path = "auth/login";
const method = "POST"; 

async function logInAccount(profile){
    const apiCall = base_API_URL + path; 
    try {
        const response = await fetch(apiCall, {
            headers: {
                "Content-type": "application/json"
            },
            method,
            body: JSON.stringify(profile)
        });

        const {accessToken, ...user} = await response.json();
        saveKey("token, accessToken");
        saveKey("profile", user);
    } catch (error){
        console.log(error); 
    }
}