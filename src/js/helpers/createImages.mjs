export function createImage (div, src, size){
    const image = document.createElement("img");
    if (src === null) {
        image.src = "../../../images/avatar-1577909_640.png";
    } else {
        image.src = src; 
    };
    image.height = size;
    image.width = size;
    image.style.objectFit = "cover"; 
    div.appendChild(image);
}