function openNav() {
    document.getElementById("mySidebar").style.right = "0";
    // document.getElementById("main").style.marginLeft = "250px";
    document.getElementById("mySidebar").style.opacity = "1";
  }
  function closeNav() {
    document.getElementById("mySidebar").style.right = "-100%";
    // document.getElementById("main").style.marginLeft = "250px";
    document.getElementById("mySidebar").style.opacity = "0";
  }


  window.onscroll = function() {
    scrollFunction()};
  
  function scrollFunction() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
      document.getElementById("paddingmenu").style.padding="10px ";
      document.getElementById("menu1").classList.add("bgw");
      document.getElementById("menu1").classList.add("bdb");
      let tttt=document.getElementsByClassName("textChange");
      for(i=0;i<tttt.length;i++){
        tttt[i].classList.add("chudenxi");
      }
      document.getElementById("logo").src="./images/logo.png";
      document.getElementById("quantity").style.backgroundColor="#222222";
      document.getElementById("quantity").style.color="#fff";
      

    } else {
      let tttt=document.getElementsByClassName("textChange");
      document.getElementById("paddingmenu").style.padding = "25px";
      document.getElementById("menu1").classList.remove("bgw");
      document.getElementById("menu1").classList.remove("bdb");
      for(i=0;i<tttt.length;i++){
        tttt[i].classList.remove("chudenxi");
      }
      document.getElementById("logo").src="./images/logo2.png";
      document.getElementById("quantity").style.backgroundColor="#fff";
      document.getElementById("quantity").style.color="#222222";
    }
  }





  var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    

  slides[slideIndex-1].style.display = "block";  

  setTimeout(showSlides, 10000); // Change image every 2 seconds
}