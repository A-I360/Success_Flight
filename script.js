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
