/**
 * @file        main.js
 * @author      Gabriele Speciale
 * @date        2024-10-09
 * @description 
 * 
Create a dynamic image gallery using CSS Grid which showcases images with random sizes and placements 
that change over time, with interactive features

Layout:
    ● use css grid to create a responsive gallery
    ● images should be displayed in various sizes and randomly placed within the grid

Behavior:
    ● the layout of the images should change every n seconds
    ● on mouseover, the image grid should freeze and stop changing
    ● allow users to click on images to enlarge them

Bonus:
    ● implement smooth animations or transitions to the gallery - see the following references
        ○ animating CSS grid examples
        ○ animate-css-grid
    ● provide navigation for browsing through the images 
        ○ e.g. next/previous buttons or keyboard navigation
*/


// get the images from the grid by creating a NodeList
const images = document.querySelectorAll(".gallery img");

// get the modal window where the clicked image will be displayed
const dialog = document.querySelector(".dialog");


// add an event listener that closes the modal when the X inside it is clicked
document.querySelector(".dialog label").addEventListener("click", () => {
    dialog.classList.remove("show");
});



// apply this event listener for each image (taken from the NodeList)
images.forEach((image) => {
    image.addEventListener("click", () => {

        /* if the dialog is already displayed and shows an image, other images cannot be clicked to show them */
        if (dialog.classList.contains("show")) {
            return;

            // add a class that shows the dialog (from display: none -> to display: block)
        } else {
            dialog.classList.add("show");

            // fill the dialog with the clicked image from the gallery
            dialog.style.backgroundImage = `url(${image.src})`;
        }
    });
});