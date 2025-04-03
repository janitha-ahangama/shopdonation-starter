document.addEventListener('DOMContentLoaded', function () {
    fetch('./src/data/data.json')
        .then(response => response.json())
        .then(data => {
            const carouselData = data.carousel1; // Change this to the desired carousel array
            const carouselContainer = document.getElementById('carousel');

            carouselContainer.innerHTML = ''; // Clear existing content

            carouselData.forEach(item => {
                const slide = document.createElement('div');
                slide.className = 'min-w-[350px] md:min-w-[248px] h-36 bg-white shadow-xl p-4 flex flex-col justify-center items-center mx-4';
                slide.innerHTML = `
                    <img src="${item.image}" alt="${item.title}" class="w-44">
                    <p class="text-gray-600 text-sm mt-2">Maximum donation: <span
                            class="text-white px-2 py-1 rounded-full text-xs"
                            style="background-color: #369936;">${item.description}</span></p>
                `;
                carouselContainer.appendChild(slide);
            });
        })
        .catch(error => console.error('Error fetching data:', error));

    const prev = document.getElementById('prev');
    const next = document.getElementById('next');
    const carousel = document.getElementById('carousel');

    prev.addEventListener('click', () => {
        carousel.scrollBy({ left: -300, behavior: 'smooth' });
    });

    next.addEventListener('click', () => {
        carousel.scrollBy({ left: 300, behavior: 'smooth' });
    });
});

document.addEventListener('DOMContentLoaded', function () {
    fetch('./src/data/data.json')
        .then(response => response.json())
        .then(data => {
            const carouselData = data.assetsCarousel;

            const mobileCarousel = document.getElementById('assetsCarouselMobile');
            const desktopCarousel = document.getElementById('assetsCarouselDesktop');

            mobileCarousel.innerHTML = '';
            desktopCarousel.innerHTML = '';

            carouselData.forEach(item => {
                // Mobile Slide
                const mobileSlide = document.createElement('div');
                mobileSlide.className = 'min-w-full bg-white p-8 shadow-lg text-center rounded-tr-[44px] rounded-bl-[44px] flex flex-col h-[350px]';
                mobileSlide.innerHTML = `
                    <img src="${item.image}" alt="${item.title}" class="mx-auto mb-4">
                    <h2 class="text-green-600 text-xl font-bold">${item.title}</h2>
                    <p class="text-gray-700 mt-2 mb-4 text-base flex-grow">${item.description}</p>
                    <a href="#" class="text-cyan-700 text-lg font-medium mt-auto inline-block hover:underline">
                        Read more &#x1F86A;
                    </a>
                `;
                mobileCarousel.appendChild(mobileSlide);

                // Desktop Slide
                const desktopSlide = document.createElement('div');
                desktopSlide.className = 'w-2/3 bg-white p-8 shadow-lg text-center rounded-tr-[44px] rounded-bl-[44px]  flex flex-col h-[400px]';
                desktopSlide.innerHTML = `
                    <img src="${item.image}" alt="${item.title}" class="mx-auto mb-4 w-24 h-24 object-contain">
                    <h2 class="text-green-600 text-xl font-bold">${item.title}</h2>
                    <p class="text-gray-700 mt-2 mb-4 text-lg flex-grow">${item.description}</p>
                    <a href="#" class="text-cyan-700 text-lg font-medium mt-auto inline-block hover:underline">
                        Read more &#x1F86A;
                    </a>
                `;
                desktopCarousel.appendChild(desktopSlide);
            });
        })
        .catch(error => console.error('Error fetching data:', error));

    // Carousel Controls (Shared)
    const prevAssets = document.getElementById('prevAssets');
    const nextAssets = document.getElementById('nextAssets');
    const mobileCarousel = document.getElementById('assetsCarouselMobile');
    const desktopCarousel = document.getElementById('assetsCarouselDesktop');

    const scrollCarousel = (carousel, direction) => {
        carousel.scrollBy({
            left: direction * carousel.clientWidth,
            behavior: 'smooth'
        });
    };

    prevAssets.addEventListener('click', () => {
        scrollCarousel(mobileCarousel, -1);
        scrollCarousel(desktopCarousel, -1);
    });

    nextAssets.addEventListener('click', () => {
        scrollCarousel(mobileCarousel, 1);
        scrollCarousel(desktopCarousel, 1);
    });
});

document.addEventListener('DOMContentLoaded', function () {
    fetch('./src/data/data.json')
        .then(response => response.json())
        .then(data => {
            const carouselData = data.causeCarousel;
            const swiperWrapper = document.querySelector('.swiper-wrapper');
            swiperWrapper.innerHTML = '';

            // First special card
            const firstCard = document.createElement('div');
            firstCard.className = 'hidden sm:flex swiper-slide w-96 h-auto rounded-xl border-gray-50 border-solid border-2 shadow-lg  flex-col justify-center items-center p-6';
            firstCard.innerHTML = `
                <div class="p-5">
                    <img src="./src/images/plus.png" alt="Register a new cause" class="w-32 mx-auto">
                    <p class="text-gray-50 mt-2 mb-4 text-xl text-center">
                        Register a new cause on ShopDonation and start raising funds in 1 minute
                    </p>
                </div>`;
            swiperWrapper.appendChild(firstCard);

            // Generate slides dynamically
            carouselData.forEach(item => {
                const slide = document.createElement('div');
                slide.className = 'swiper-slide w-96 h-auto rounded-xl bg-white shadow-lg flex flex-col justify-center items-center';
                slide.innerHTML = `
                    <img src="${item.image}" alt="${item.name}" class="w-full">
                    <div class="p-5">
                        <h2 class="text-green-600 text-2xl font-bold">${item.name}</h2>
                        <p class="text-gray-700 mt-2 mb-4 text-xl flex-grow">
                            ${item.description}
                        </p>
                        <p class="text-green-600 font-bold mt-2 mb-4 text-xl flex-grow">
                            <strong class="text-black">Raised: </strong>€ ${item.amount}
                        </p>
                        <button class="w-full text-white px-8 py-4 rounded-full font-semibold" style="background-color: #369936;">
                            Select this cause
                        </button>
                    </div>`;
                swiperWrapper.appendChild(slide);
            });

            // Initialize Swiper
            new Swiper('.swiper-container', {
                slidesPerView: 3, // Show exactly 3 slides
                slidesPerGroup: 3, // Move 3 slides at a time
                spaceBetween: 20,
                loop: false,
                navigation: {
                    nextEl: '#nextCause',
                    prevEl: '#prevCause',
                },
                breakpoints: {
                    1280: { slidesPerView: 4, slidesPerGroup: 4 },
                    1024: { slidesPerView: 3, slidesPerGroup: 3 },
                    640: { slidesPerView: 2, slidesPerGroup: 2 },
                    0: { slidesPerView: 1, slidesPerGroup: 1 }
                }
            });
        })
        .catch(error => console.error('Error fetching data:', error));
});

document.addEventListener('DOMContentLoaded', function () {
    fetch('./src/data/data.json')
        .then(response => response.json())
        .then(data => {
            const carouselData = data.testimonialCarousel; // Change this to the desired carousel array
            const carouselContainer = document.getElementById('mobileTestimonialCarousel');

            carouselContainer.innerHTML = ''; // Clear existing content

            carouselData.forEach(item => {
                const slide = document.createElement('div');
                slide.className = 'h-full min-w-full rounded-xl flex flex-col justify-center items-center';
                slide.innerHTML = `
                    <img src="${item.image}" alt="How it works" class="w-full h-auto mx-auto mb-4">
                `;
                carouselContainer.appendChild(slide);
            });
        })
        .catch(error => console.error('Error fetching data:', error));

    const prevTestimonial = document.getElementById('prevTestimonial');
    const nextTestimonial = document.getElementById('nextTestimonial');
    const testimonialCarousel = document.getElementById('mobileTestimonialCarousel');

    prevTestimonial.addEventListener('click', () => {
        testimonialCarousel.scrollBy({ left: -testimonialCarousel.clientWidth, behavior: 'smooth' });
    });

    nextTestimonial.addEventListener('click', () => {
        testimonialCarousel.scrollBy({ left: testimonialCarousel.clientWidth, behavior: 'smooth' });
    });
});

document.addEventListener('DOMContentLoaded', function () {
    fetch('./src/data/data.json')
        .then(response => response.json())
        .then(data => {
            const carouselData = data.testimonialCarousel; // Change this to the desired carousel array
            const mobileTestimonialCarousel = document.getElementById('mobileTestimonialCarousel');
            const desktopTestimonialCarousel = document.getElementById('desktopTestimonialCarousel');

            desktopTestimonialCarousel.innerHTML = '';
            mobileTestimonialCarousel.innerHTML = '';

            carouselData.forEach(item => {

                // Desktop version
                const desktopSlide = document.createElement('div');
                desktopSlide.className = 'max-w-7xl mx-auto grid grid-cols-3 md:grid-cols-3 gap-6 text-center px-6 md:px-0 pb-20';
                desktopSlide.innerHTML =  `
                <div class="p-8 flex flex-col h-full w-[28rem]  items-center">
                    <img src="${item.image}" alt="How it works" class="mx-auto mb-4">
                </div>`;
                desktopTestimonialCarousel.appendChild(desktopSlide);

                // Mobile version
                const mobileSlide = document.createElement('div');
                mobileSlide.className = 'h-full min-w-full rounded-xl flex flex-col justify-center items-center';
                mobileSlide.innerHTML =  `
                    <img src="${item.image}" alt="How it works" class="w-full h-auto mx-auto mb-4">
                `;
                mobileTestimonialCarousel.appendChild(mobileSlide);
            });
        })
        .catch(error => console.error('Error fetching data:', error));

    const prevAssets = document.getElementById('prevCause');
    const nextAssets = document.getElementById('nextCause');
    const causeCarousel = document.getElementById('mobileTestimonialCarousel');

    prevAssets.addEventListener('click', () => {
        causeCarousel.scrollBy({ left: -causeCarousel.clientWidth, behavior: 'smooth' });
    });

    nextAssets.addEventListener('click', () => {
        causeCarousel.scrollBy({ left: causeCarousel.clientWidth, behavior: 'smooth' });
    });
});