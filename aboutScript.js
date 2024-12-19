document.addEventListener('DOMContentLoaded', () => {
    const containers = document.querySelectorAll('.container-1, .container-2, .container-3, .container-4');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target); 
            }
        });
    }, {
        threshold: 0.7 
    });

    containers.forEach(container => {
        observer.observe(container);
    });
});
