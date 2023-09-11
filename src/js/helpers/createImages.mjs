export function createImage (div, src, size){
    const image = document.createElement("img");
    image.src = src;
    image.height = size;
    image.width = size;
    image.style.objectFit = "cover"; 
    div.appendChild(image);
}