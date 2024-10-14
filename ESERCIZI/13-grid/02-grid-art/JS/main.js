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




// get the gallery container grid which contains ALL THE IMAGES
const gallery = document.querySelector(".gallery");

// get the images from the grid by creating a NodeList
const images = document.querySelectorAll(".gallery img");

// get the modal window where the clicked image will be displayed
const dialog = document.querySelector("dialog");


//! apply an event listener for each image to handle click events
images.forEach((image) => {
    image.addEventListener("click", () => {

        // if the modal is already visible, prevent opening it again
        if (dialog.classList.contains("show")) {
            return;

        } else {

            // show the modal with the clicked image
            dialog.classList.add("show");
            dialog.style.backgroundImage = `url(${image.src})`;

            // stop the animation on the gallery layout
            gallery.classList.add("layoutStop");

            // disable hover effects on all images
            images.forEach((img) => {
                img.classList.add("noHover");
            });
        }
    });
});



//! add an event listener to the X button inside the modal to close it
document.querySelector("dialog label").addEventListener("click", () => {

    // hide the modal
    dialog.classList.remove("show");

    // restart the gallery layout animation
    gallery.classList.remove("layoutStop");

    // re-enable hover effects on all images
    images.forEach((img) => {
        img.classList.remove("noHover");
    });
});
