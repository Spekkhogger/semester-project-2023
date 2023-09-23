import { getProfileName } from "../helpers/getProfileName.mjs";
import { base_API_URL } from "../constants.mjs";
import { authChangeProfile } from "../API/Auth/changeProfileAuth.mjs";


export async function editProfile() {
    const form = document.querySelector("#editProfileForm"); 

    form.addEventListener("submit", async(event)=> {
        event.preventDefault();
        const formData = new FormData(event.target); 
        const media = Object.fromEntries(formData.entries());

        try {
            await authChangeProfile(media);
            window.location.reload(); 
        } catch (error) {
            form.innerHTML = `Oops, something went wrong.
                                Error: ${error}`
        }
        
    })
    
}