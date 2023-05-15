document.getElementById('more-info').addEventListener('click', function() {
  alert('Here is more information about our program...');
});

let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");

  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }

  slideIndex++;
  if (slideIndex > slides.length) {
      slideIndex = 1
  }    

  slides[slideIndex-1].style.display = "block";  
  setTimeout(showSlides, 4000); 
}

let topButton = document.getElementById("myBtn");

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

AOS.init();

$('.scroll-item').on('mouseover', function() {
  $('.scroll-item').removeClass('active');
  $(this).addClass('active');
});

window.onscroll = function() {
  scrollFunction();
  myFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      topButton.style.display = "block";
  } else {
      topButton.style.display = "none";
  }
}

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("progress-bar").style.width = scrolled + "%";
}
document.getElementById('userDropdown').addEventListener('click', function() {
  var dropdownMenu = document.getElementById('dropdownMenu');
  
  if (dropdownMenu.style.display === 'none') {
    dropdownMenu.style.display = 'block';
  } else {
    dropdownMenu.style.display = 'none';
  }
});
$(document).ready(function() {
  $("nav ul li a").addClass("nav-link");
});
window.addEventListener('scroll', function() {
  var footer = document.querySelector('footer');
  if (window.pageYOffset > 0) {
      footer.style.display = 'block'; 
  } else {
      footer.style.display = 'none'; 
  }
});
var prevScrollPos = window.pageYOffset;
var header = document.querySelector('header');
var progressBar = document.getElementById('progress-bar');
var headerHeight = header.offsetHeight;

window.addEventListener('scroll', function() {
    var currentScrollPos = window.pageYOffset;

    if (prevScrollPos > currentScrollPos) {
        header.style.top = '0'; 
        progressBar.style.top = headerHeight + 'px'; 
    } else {
        header.style.top = '-' + headerHeight + 'px'; 
        progressBar.style.top = '0'; 
    }

    prevScrollPos = currentScrollPos;
});
document.addEventListener('DOMContentLoaded', function() {
  var faqQuestions = document.querySelectorAll('.faq-question');
  faqQuestions.forEach(function(question) {
    question.addEventListener('click', function() {
      var faq = this.parentNode;
      faq.classList.toggle('active');
    });
  });
});