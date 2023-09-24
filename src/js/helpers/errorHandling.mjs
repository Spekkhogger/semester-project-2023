export function errorHandling (placement, cError) {
    placement.textContent = ``; 
    const errorImage = document.createElement("img"); 
    errorImage.src = "../../../images/cherry_1791356bw.png"; 
    errorImage.style.width = "200px"
    const errorMessage = document.createElement("div"); 
    errorMessage.innerHTML = `<h5> Oops, looks like something went wrong</h5>
    <p> Error message: ${cError} </p>`

    placement.appendChild(errorImage); 
    placement.appendChild(errorMessage); 
    errorMessage.classList.add("text-danger"); 

    placement.classList.add("d-flex", "flex-column", "m-5", "align-items-center", "text-center");
}

export function errorNoImage (placement, cError) {
    placement.textContent = ``; 
    const errorMessage = document.createElement("div"); 
    errorMessage.innerHTML = `<h5> Oops, looks like something went wrong</h5>
    <p> Error message: ${cError} </p>`

    placement.appendChild(errorMessage); 

    placement.classList.add("d-flex", "flex-column", "m-5", "align-items-center", "text-center");
}