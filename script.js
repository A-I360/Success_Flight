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

// ================= CONTACT FORM =================
const form = document.querySelector(".contact-form");

form.addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Thank you for contacting Success Flight Educational Services. We will respond shortly.");
    form.reset();
});

// ================= CTA BUTTONS =================
const ctaButtons = document.querySelectorAll(".primary-btn");

ctaButtons.forEach(button => {
    button.addEventListener("click", () => {
        console.log("CTA Clicked");
    });
});
// Contact Form Mailto
const contactForm = document.querySelector(".contact-form");

contactForm.addEventListener("submit", function(e) {
    e.preventDefault(); // prevent normal submit

    // Get form values
    const name = document.getElementById("contact-name").value;
    const email = document.getElementById("contact-email").value;
    const message = document.getElementById("contact-message").value;

    // Build mailto link
    const mailtoLink = `mailto:successflightedu@gmail.com
?subject=Contact Form Submission from ${encodeURIComponent(name)}
&body=Name: ${encodeURIComponent(name)}%0D%0AEmail: ${encodeURIComponent(email)}%0D%0AMessage: ${encodeURIComponent(message)}`;

    // Open user's email client
    window.location.href = mailtoLink;
});
