// Submission of registration form
// Handles submission

export function registrationSubmission() {
    const registrationForm = document.querySelector("#registrationForm");

    registrationForm.addEventListener("submit", async(event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const profile = Object.fromEntries(formData.entries());

        await createAccount(profile);
        
    })
}

// Creates account
import { base_API_URL } from "../constants.mjs";

const path = "auth/register";
const method = "POST"; 
const apiCall = base_API_URL + path;
console.log(apiCall); 


async function createAccount(profile){
    const apiCall = base_API_URL + path;
    console.log(apiCall); 

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