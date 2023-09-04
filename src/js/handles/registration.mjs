// Submission of registration form
// Handles submission

export function registrationSubmission() {
    const registration = document.querySelector("#registrationForm");

    registration.addEventListener("submit", async(event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        console.log(formData);
        const profile = Object.fromEntries(formData.entries());
        console.log(profile);
        await createAccount(profile);
        
    })
}

// Creates account
import { base_API_URL } from "../constants.mjs";

const path = "auth/register";
const method = "POST"; 


async function createAccount(profile){
    const apiCall = base_API_URL + path;

    try {
        const response = await fetch(apiCall, {
            headers: {
                "Content-type": "application/json"
            },
            method,
            body: JSON.stringify(profile)
        })

        const result = await response.json();
        return result;

    } catch (error) {
        console.log(error); 
    }
}