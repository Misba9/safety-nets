
// navbar toggle start
//     function toggleMenu() {
//     const menu = document.getElementById('nav-links-id');
//     const hamburger = document.getElementById('hamburger');

//     // Toggle menu visibility
//     if (menu.style.display === 'block') {
//         menu.style.display = 'none';
//     } else {
//         menu.style.display = 'block';
//     }

//     // Toggle active class on the hamburger button
//     hamburger.classList.toggle('active');

//     // Click outside to close menu
//     document.addEventListener('click', function(event) {
//         const isClickInside = menu.contains(event.target) || hamburger.contains(event.target);

//         if (!isClickInside) {
//             menu.style.display = 'none';
//             hamburger.classList.remove('active'); // Remove active class when clicking outside
//         }
//     });
// }





// Variable to keep track of the click event listener
let outsideClickListenerAdded = false;

function toggleMenu() {
    const menu = document.getElementById('nav-links-id');
    const hamburger = document.getElementById('hamburger');

    // Toggle menu visibility
    if (menu.style.display === 'block') {
        menu.style.display = 'none';
        hamburger.classList.remove('active'); // Remove active class when menu is closed

        // Remove click outside event listener if it exists
        if (outsideClickListenerAdded) {
            document.removeEventListener('click', handleOutsideClick);
            outsideClickListenerAdded = false;
        }
    } else {
        menu.style.display = 'block';
        hamburger.classList.add('active'); // Add active class when menu is opened

        // Add click outside event listener
        if (!outsideClickListenerAdded) {
            document.addEventListener('click', handleOutsideClick);
            outsideClickListenerAdded = true;
        }
    }
}

// Function to handle clicks outside the menu
function handleOutsideClick(event) {
    const menu = document.getElementById('nav-links-id');
    const hamburger = document.getElementById('hamburger');
    const isClickInside = menu.contains(event.target) || hamburger.contains(event.target);

    if (!isClickInside) {
        menu.style.display = 'none';
        hamburger.classList.remove('active'); // Remove active class when clicking outside

        // Remove click outside event listener
        document.removeEventListener('click', handleOutsideClick);
        outsideClickListenerAdded = false;
    }
}







// navbar end 


// slider start    
let slideIndex = 1; // Start with the first slide
let slideTimer;  // Global timer variable

// Function to show slides automatically
function showSlides() {
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");

    // Hide all slides initially
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    // If slideIndex exceeds the total number of slides, reset to the first slide
    if (slideIndex > slides.length) {
        slideIndex = 1;
    } else if (slideIndex < 1) {
        slideIndex = slides.length; // Handle reverse navigation
    }

    // Remove the "active" class from all dots
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    // Display the current slide and mark the corresponding dot as active
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";

    // Increment slideIndex to move to the next slide on the next automatic cycle
    slideIndex++;

    // Automatically change slide every 2 seconds
    slideTimer = setTimeout(showSlides, 2000);
}

// Function to navigate manually (next/prev)
function plusSlides(n) {
    clearTimeout(slideTimer); // Stop the current timer
    slideIndex += n;

    // Handle the boundaries when navigating manually
    if (slideIndex > document.getElementsByClassName("mySlides").length) {
        slideIndex = 1;
    } else if (slideIndex < 1) {
        slideIndex = document.getElementsByClassName("mySlides").length;
    }

    showSlides(); // Show the chosen slide and restart the automatic slideshow
}

// Function to manually set the current slide based on dot click
function currentSlide(n) {
    clearTimeout(slideTimer); // Stop the current timer
    slideIndex = n;

    showSlides(); // Show the chosen slide and restart the automatic slideshow
}

// Call the function to start showing the slides automatically when the page loads
window.onload = function () {
    showSlides();  // Start the slideshow on page load
};
