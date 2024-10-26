// Select all elements that should fade in
const elementsToFade = document.querySelectorAll('.fade-in-element');

// Function to handle the fading in
const fadeInElements = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Add the fade-in class
            entry.target.classList.add('fade-in');
            // Stop observing the element
            observer.unobserve(entry.target);
        }
    });
};

// Create an Intersection Observer
const observer = new IntersectionObserver(fadeInElements, {
    threshold: 0.1 // Trigger when 10% of the element is visible
});

// Observe each element
elementsToFade.forEach(element => {
    observer.observe(element);
});