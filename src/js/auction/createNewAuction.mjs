import { errorNoImage } from "../helpers/errorHandling.mjs";


export async function createNewAuction() {
    const form = document.querySelector("#newAuctionForm")
    const errorMessage = document.querySelector("#errorMessageLog")

    form.addEventListener("submit", async(event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const newAuction = Object.fromEntries(formData.entries);
        console.log(newAuction); 

        try {
            


        } catch (error){
            errorNoImage(errorMessage, error); 
        }
    })


}