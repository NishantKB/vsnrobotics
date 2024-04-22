const galleryItems = document.querySelectorAll('.galleryItem');
const lightbox = document.querySelector('.lightbox');
const lightboxImage = document.querySelector('.lightboxImage');
const closeBtn = document.querySelector('.close');

galleryItems.forEach(item => {
    item.addEventListener('click', () => {
        const imgSrc = item.querySelector('img').src;
        lightboxImage.src = imgSrc;
        lightbox.style.display = 'block';
    });
});

closeBtn.addEventListener('click', () => {
    lightbox.style.display = 'none';
});
function toggleNav() {
    var nav = document.querySelector('.nav');
    nav.classList.toggle('show');
}

// function sendMail() {
//     let params = {
//         name: document.getElementById("name").value,
//         email: document.getElementById("email").value,
//         query: document.getElementById("query").value
//     };

//     emailjs.send('service_5ky7acm', 'template_gft9dsh', params).then(function (res) {
//         alert("Email Sent Successfully.");
//     }).catch(function (error) {
//         alert("Failed to send email. Error: " + error);
//     });
// }

