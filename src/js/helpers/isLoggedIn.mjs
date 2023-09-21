import { loadKey } from "../storage.mjs";

export function isLoggedIn() {
    return loadKey() !== null; 
}