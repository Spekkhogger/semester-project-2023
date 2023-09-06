import { logInAccount } from "../API/Auth/loginauth.mjs";


export function logInSubmission() {
    const logInForm = document.querySelector("#logInForm");
    const message = document.querySelector("#errorMessageLog");
    logInForm.addEventListener("submit", async(event) => {
        event.preventDefault();
        const formData = new FormData(event.target); 
        const profile = Object.fromEntries(formData.entries());

        try {
            await logInAccount(profile); 
        } catch (error) {
            message.innerHTML = error;
        }
        
    })
}