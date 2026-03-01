// ================= SCROLL REVEAL =================
const sections = document.querySelectorAll(".fade-section");

const revealOnScroll = () => {
    const triggerBottom = window.innerHeight * 0.85;

    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;

        if (sectionTop < triggerBottom) {
            section.classList.add("active");
        }
    });
};

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

// ================= FAQ ACCORDION =================
const faqQuestions = document.querySelectorAll(".faq-question");

faqQuestions.forEach(question => {
    question.addEventListener("click", () => {
        const answer = question.nextElementSibling;

        if (answer.style.maxHeight) {
            answer.style.maxHeight = null;
        } else {
            answer.style.maxHeight = answer.scrollHeight + "px";
        }
    });
});

// ================= CTA BUTTONS =================
const ctaButtons = document.querySelectorAll(".primary-btn");

ctaButtons.forEach(button => {
    button.addEventListener("click", () => {
        console.log("CTA Clicked");
    });
});
// ================= CONTACT FORM =================
const contactForm = document.querySelector(".contact-form");

contactForm.addEventListener("submit", function(e) {
    e.preventDefault(); // stop normal form submission

    const name = document.getElementById("contact-name").value.trim();
    const email = document.getElementById("contact-email").value.trim();
    const message = document.getElementById("contact-message").value.trim();

    // Build mailto link safely
    const mailtoLink = `mailto:successflight1@gmail.com?subject=${
        encodeURIComponent("Contact Form Submission from " + name)
    }&body=${
        encodeURIComponent(
            "Name: " + name + "\n" +
            "Email: " + email + "\n\n" +
            "Message:\n" + message
        )
    }`;

    // Open email client
    window.location.href = mailtoLink;

    // Optional success message
    alert("Thank you for contacting Success Flight Educational Services. We will respond shortly.");

    contactForm.reset();
});
