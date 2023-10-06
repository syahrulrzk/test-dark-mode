AOS.init();
// You can also pass an optional settings object
// below listed default settings
AOS.init({
  
  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 700, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});
// Teks yang akan ditampilkan dengan efek typing berjalan
var text = "With over 2 years of experience in the IT industry, I have focused on designing, managing and optimizing network infrastructure for various projects and companies.";

// Selector elemen paragraf
var paragraph = document.getElementById("typing-text");

// Inisialisasi indeks teks dan timer
var index = 0;
var typingSpeed = 40; // Kecepatan typing (ms)

// Fungsi untuk menampilkan teks secara berurutan
function type() {
if (index < text.length) {
  paragraph.innerHTML += text.charAt(index);
  index++;
  setTimeout(type, typingSpeed);
}
}

// Panggil fungsi typing 
type();


//read More... or read less

var readMoreButtons = document.querySelectorAll('.read-more-btn');

    readMoreButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            var parent = button.parentNode;
            var responsibilities = parent.querySelector('.read-more-text');

            if (responsibilities.style.display === 'none' || responsibilities.style.display === '') {
                responsibilities.style.display = 'block';
                button.innerText = 'Read Less...';
            } else {
                responsibilities.style.display = 'none';
                button.innerText = 'Read More...';
            }
        });
    });



document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('contact-form').addEventListener('submit', function (event) {
        event.preventDefault();

        var form = this;

        if (form.checkValidity()) {
            var name = document.getElementById('name').value;
            var email = document.getElementById('email').value;
            var subject = document.getElementById('subject').value;
            var msg = document.getElementById('message').value;

            var formattedMsg = `Name: ${name}\nEmail: ${email}\nSubject: ${subject}\n\nMessage:\n${msg}`;

            var token = '6581933502:AAE6y-rPZE2ZO_mQPh2aUSh5JBE5BYiajF0';
            var grup = '-4078684754';

            $.ajax({
                url: `https://api.telegram.org/bot${token}/sendMessage?chat_id=${grup}&text=${encodeURIComponent(formattedMsg)}&parse_mode=html`,
                method: 'POST',
                success: function () {
                    var successMessage = document.getElementById('successMessage');
                    successMessage.style.display = 'block';
                    successMessage.classList.add('alert-success');

                    document.getElementById('name').value = '';
                    document.getElementById('email').value = '';
                    document.getElementById('subject').value = '';
                    document.getElementById('message').value = '';

                    setTimeout(function () {
                        successMessage.classList.remove('alert-success');
                        successMessage.style.animation = 'fadeOut 0.5s ease-in-out';
                        setTimeout(function () {
                            successMessage.style.display = 'none';
                        }, 500);
                    }, 3000);
                }
            });
        }
    });
});