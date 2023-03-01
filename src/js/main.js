jQuery(function () {
    const productThumbs = new Swiper(".js__product-thumbs", {
        slidesPerView: 4,
        slidesPerGroup: 1,
        direction: "vertical",
        navigation: {
            nextEl: ".thumbs-controls .swiper-button-next",
            prevEl: ".thumbs-controls .swiper-button-prev",
        },
    });

    const productGallery = new Swiper(".js__product-gallery", {
        slidesPerView: 1,
        slidesPerGroup: 1,
        navigation: false,
        thumbs: {
            autoScrollOffset: 1,
            swiper: productThumbs,
        },
    });
});
