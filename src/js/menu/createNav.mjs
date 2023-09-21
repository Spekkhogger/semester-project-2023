import { isLoggedIn } from "../helpers/isLoggedIn.mjs";

export function createNav() {
    const navBar = document.querySelector("#navItems");
    const landingLogIn = document.querySelector("#logInLandingPage");

    if (!isLoggedIn()) {
        navBar.innerHTML = `<ul class="navbar-nav">
                                <li class="nav-item m-1">
                                <a class="nav-link" href="../auctions/">Auctions</a>
                                </li>
                                <li class="nav-item m-1">
                                <a class="nav-link" href="../new-auction/">+New auction</a>
                                </li>
                                <li class="nav-item m-1">
                                <a class="nav-link active" href="../profile/">Profile</a>
                                </li>
                            </ul>`;

        // landingLogIn.style.display = "none";

    } else {
        navBar.innerHTML = `<ul class="navbar-nav">
                                <li class="nav-item m-1">
                                <button type="button" class="btn custom-primary" data-bs-toggle="modal" data-bs-target="#logInModal">Log In</button>
                                </li>
                                <li class="nav-item m-1">
                                <button type="button" class="btn custom-secondary" data-bs-toggle="modal" data-bs-target="#registerModal">Register</button>
                                </li>
                            </ul>`;
    }
}