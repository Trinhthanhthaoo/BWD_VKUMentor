const  toggleBtn = document.querySelector('.toggle_btn')
const  toggleBtnIcon = document.querySelector('.toggle_btn i')
const dropMenu = document.querySelector('.dropdown_menu')
toggleBtn.onclick= function(){
    dropMenu.classList.toggle('open')
    const isOpen = dropMenu.classList.contains('open')

    toggleBtnIcon.classList=isOpen
    ?'fa-solid fa-xmark'
    :'fa-solid fa-bars'
}
var slideIndex = 1;
showDivs(slideIndex);

var slideIndex = 0;

var myVar;

carousel();

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function currentDiv(n) {
  showDivs(slideIndex = n);
}

function myFunction() {
  myVar = setTimeout(carousel, 10000);
}

function myStopFunction() {
  clearTimeout(myVar);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" w3-white", "");
  }
  x[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " w3-white";
  
  myStopFunction();
  myFunction();
}

function carousel() {
  var dots = document.getElementsByClassName("demo");
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  
  slideIndex++;
  if (slideIndex > x.length) {slideIndex = 1} 
  x[slideIndex-1].style.display = "block";
 
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" w3-white", "");
  }
  
  dots[slideIndex-1].className += " w3-white";
  
  myStopFunction();
  myFunction();
  
  
}

let lightImg = document.querySelector(".light-img");
let viewBtn = document.querySelectorAll(".view-btn");

viewBtn.forEach(el => {
  el.addEventListener("click", () => {
    document.body.classList.add("effect");
    let imgSrc = el.getAttribute("data-src");
    lightImg.src = imgSrc;
  });
});

window.addEventListener("click", event => {
  if(event.target.className == "box-wrapper" || event.target.className == "close-btn") {
    document.body.classList.remove("effect");
  }
})
const arrow_right=document.querySelector("#arrow-right")
const arrow_left=document.querySelector("#arrow-left")
const slider=document.querySelector(".slider")

const width_slider= slider.scrollWidth
const interval = 350




function slide(event){

    
    const current_property_left_slider= parseInt(getComputedStyle(slider).left)


    let new_pos_left_slider


    if(event.currentTarget === arrow_right){


        if(Math.abs(current_property_left_slider) + interval + slider.clientWidth >= slider.scrollWidth){

            new_pos_left_slider= `-${slider.scrollWidth - slider.clientWidth}px`

        }


        else{

            new_pos_left_slider= `${current_property_left_slider - interval}px`

        }

        slider.style.left= new_pos_left_slider

        
    }



    if(event.currentTarget === arrow_left){

        new_pos_left_slider = current_property_left_slider + interval

        if(new_pos_left_slider > 0){
            
            slider.style.left="0px"
        }

        else{

            slider.style.left= `${new_pos_left_slider}px`

        }
    }

}


arrow_left.addEventListener("click", slide)
arrow_right.addEventListener("click", slide)


