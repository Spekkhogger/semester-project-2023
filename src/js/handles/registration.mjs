// Submission of registration form
// Handles submission

export function registrationSubmission() {
    const registrationForm = document.querySelector("#registrationForm");

    registrationForm.addEventListener("submit", async(event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const profile = Object.fromEntries(formData.entries());

    })
}

// Creates account

