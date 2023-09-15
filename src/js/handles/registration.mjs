import { createAccount } from "../API/Auth/registrer.mjs";

export function registrationSubmission() {
    const registration = document.querySelector("#registrationForm");
    const message = document.querySelector("#errorMessageReg");

    registration.addEventListener("submit", async(event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const profile = Object.fromEntries(formData.entries());
        
        try {
            await createAccount(profile);
        } catch (error) {
            message.innerHTML = error;
        }
    })
}