const images = [
    "https://img.magnific.com/free-vector/seasonal-sale-discounts-presents-purchase-visiting-boutiques-luxury-shopping-price-reduction-promotional-coupons-special-holiday-offers-vector-isolated-concept-metaphor-illustration_335657-2766.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcHbN_Fy3Jsu0H6hN2ql_KRGplHNk_34rUhg&s",
    "https://plus.unsplash.com/premium_photo-1683141052679-942eb9e77760?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c2hvcHBpbmd8ZW58MHx8MHx8fDA%3D"
];

let current = 0;
const slide = document.getElementById("slide");

setInterval(() => {
    current = (current + 1) % images.length;
    slide.src = images[current];
}, 3000);
