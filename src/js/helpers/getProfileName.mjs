import { loadKey } from "../storage.mjs";

export function getProfileName(){
    const profile = loadKey("profile");
    return profile.name || null; 
}