document.getElementById('autoplay').play(); //auto play video

function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Lihat lebih banyak"; 
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "lebih sedikit"; 
      moreText.style.display = "inline";
    }
  }

  // navbar
  const nav = document.querySelector('nav');

window.addEventListener('scroll', function() {
  const offset = window.pageYOffset;
  
  if(offset > 75)
    nav.classList.add('scroll')
  else 
    nav.classList.remove('scroll')
});