export function saveKey(key, value) {
    localStorage.setItem(key, JSON.stringify(value)); 
}

export function loadKey (key){
    try {
        localStorage.getItem(key);
        return JSON.parse(value); 
    }catch(error) {
        console.log(error);
        // Add error alert
    }
}

export function removeKey (key){
    localStorage.removeItem(key); 
}