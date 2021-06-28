// JavaScript Document
window.onload=function(){}

window.onscroll = function() {myFunction()};


      function myFunction(x) {
      x.classList.toggle("change");
     }

   $(document).ready(function(){
   $("#hamburger").mousedown(function(){
    $("#myTopnavdrop").slideToggle();
  });
  });

 
 var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}  

 $(document).on('click','nav a',function(){
	$(this).addClass('active').siblings().removeClass('active')
})


	var elms=document.getElementsByClassName("navmenu");
	var x = document.getElementsByTagName("title");
	if (x=="Home"){
		 elms[0].classList.add("active")
	}	
	if (x=="Gallery"){
		 elms[3].classList.add("active")
	}
	
