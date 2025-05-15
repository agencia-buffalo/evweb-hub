/* Accordion */
document.addEventListener('DOMContentLoaded', () => {
    const initAccordion = (accordionContainer) => {
        const accordions = accordionContainer.querySelectorAll('details');

        accordions.forEach((accordion) => {
            const summary = accordion.querySelector('summary');
            const icon = summary.querySelector('.accordion-icon');

            accordion.addEventListener('toggle', () => {
                if (accordion.open) {
                    // Cierra los demás detalles abiertos en el mismo contenedor
                    accordions.forEach((item) => {
                        if (item !== accordion && item.open) {
                            item.open = false;
                            const otherIcon = item.querySelector('.accordion-icon');
                            if (otherIcon) {
                                otherIcon.classList.remove('icon-minus');
                                otherIcon.classList.add('icon-plus');
                            }
                        }
                    });
                    if (icon) {
                        icon.classList.remove('icon-plus');
                        icon.classList.add('icon-minus');
                    }
                } else {
                    if (icon) {
                        icon.classList.remove('icon-minus');
                        icon.classList.add('icon-plus');
                    }
                }
            });
        });
    };

    // Inicializa todos los contenedores de acordeón
    const accordionContainers = document.querySelectorAll('.accordion-container');
    accordionContainers.forEach(initAccordion);
});

/* Slide */
document.addEventListener('DOMContentLoaded', () => {
    const sliderWrapper = document.querySelector('.slider-wrapper');
    const slides = document.querySelectorAll('.slider-wrapper img');
    const prevButton = document.getElementById('prev');
    const nextButton = document.getElementById('next');

    let currentIndex = 0;

    const updateSliderPosition = () => {
        const offset = -currentIndex * 100; // Move by 100% per slide
        sliderWrapper.style.transform = `translateX(${offset}%)`;
    };

    const showNextSlide = () => {
        currentIndex = (currentIndex + 1) % slides.length; // Loop to the first slide
        updateSliderPosition();
    };

    const showPrevSlide = () => {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length; // Loop to the last slide
        updateSliderPosition();
    };

    // Event Listeners
    nextButton.addEventListener('click', showNextSlide);
    prevButton.addEventListener('click', showPrevSlide);
});