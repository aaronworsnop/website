function onload() {
    // User uses dark mode
    if (storedSiteMode == "dark") {
        document.querySelector("#dark-mode").checked = true;
        document.querySelector("#dark-mode-mobile").checked = true;
        
        // Dark mode
        document.querySelector("body").style.backgroundColor = "var(--almost-black)";
    }
}

function doDarkMode(element) {
    const isChecked = element.checked;

    // Change the background video to dark mode
    if (isChecked) {

    } else {

    }
}

for(const card of document.querySelectorAll(".card")) {
    card.onmousemove = e => handleOnMouseMove(e);
}

const handleOnMouseMove = (e) => {
    const { currentTarget: target } = e;

    const rect = target.getBoundingClientRect(),
    x = e.clientX - rect.left,
    y = e.clientY - rect.top;

    target.style.setProperty('--mouse-x', `${ x }px`);
    target.style.setProperty('--mouse-y', `${ y }px`);
}

/**
 * Make dark mode work
 * Add more top padding to the grid area
 * Cookies across the pages
 * When uploaded to live, check if navbar needs more or less height depending on matching the home page
   for dark mode height
 * 
 * Tune hover animation
 * Might need more exciting background and look since home page is so epic
 * Change padding to margin for back button. Selecting the left of the back button counts as the button right now...
 * 
 * Might want to dynamically set transform anchors for hover effects
 * Fade in/out for API fetches and loading? For example leetcode statistics fade instead of
 * just popping in
 * 
 * Maybe custom cursor on this page, across all pages? Like apples iPadOS cursor, moulds into the card.
 * 
 */