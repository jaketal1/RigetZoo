// Navigation Highlighting
document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll("nav a").forEach(link => {
        if (link.href === window.location.href) {
            link.style.color = "yellow"; // Highlight the active link
        }
    });
});

// Form Validation and Submission Handling
document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    if (form) {
        form.addEventListener("submit", function (event) {
            const email = document.querySelector("input[name='email']").value;
            const phone = document.querySelector("input[name='phone']").value;

            // Validation flags
            let isValid = true;

            // Validate email
            if (!email.includes("@")) {
                alert("Please enter a valid email address.");
                isValid = false;
            }

            // Validate phone (11 digits for UK)
            if (!/^\d{11}$/.test(phone)) {
                alert("Please enter a valid 11-digit phone number.");
                isValid = false;
            }

            // If validation fails, prevent form submission
            if (!isValid) {
                event.preventDefault();
                return;
            }
        });
    }
});

// Disable Past Dates in Booking Form
document.addEventListener("DOMContentLoaded", function () {
    const today = new Date().toISOString().split("T")[0];
    const dateInput = document.querySelector("input[name='date_of_visit']");
    if (dateInput) {
        dateInput.setAttribute("min", today); // Set minimum date to today
    }
});

// Image Carousel
document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll("#carousel img");
    if (images.length > 0) {
        let currentIndex = 0;

        setInterval(() => {
            images[currentIndex].style.display = "none";
            currentIndex = (currentIndex + 1) % images.length; // Cycle through images
            images[currentIndex].style.display = "block";
        }, 3000); // Change image every 3 seconds
    }
});

// Scroll-to-Top Button
document.addEventListener("DOMContentLoaded", function () {
    const scrollTopBtn = document.getElementById("scrollTopBtn");
    if (scrollTopBtn) {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 200) {
                scrollTopBtn.style.display = "block";
            } else {
                scrollTopBtn.style.display = "none";
            }
        });

        scrollTopBtn.addEventListener("click", () => {
            window.scrollTo({ top: 0, behavior: "smooth" }); // Smooth scroll to top
        });
    }
});

// Custom Modal for Alerts
function showModal(message) {
    const modal = document.getElementById("modal");
    const modalText = document.getElementById("modalText");

    if (modal && modalText) {
        modalText.innerText = message;
        modal.style.display = "block";
    }
}

function closeModal() {
    const modal = document.getElementById("modal");
    if (modal) {
        modal.style.display = "none";
    }
}
