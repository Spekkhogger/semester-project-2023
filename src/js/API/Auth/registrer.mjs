import { base_API_URL } from "../../constants.mjs";

const path = "auth/register";
const method = "POST"; 


export async function createAccount(profile){
    const apiCall = base_API_URL + path;

        const response = await fetch(apiCall, {
            headers: {
                "Content-type": "application/json"
            },
            method,
            body: JSON.stringify(profile)
        })

        if(response.ok) {
            const result = await response.json();
            return result;
        }

        const json = await response.json();
        throw new Error(json.errors[0].message);
}