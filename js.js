const dangKyBtn = document.querySelector('.DangKyMentor')
const form = document.querySelector('.overlay-container')
const closeForm = document.querySelector('.icon__close i')
const formfull = document.querySelector('.wrapp')
dangKyBtn.addEventListener('click',()=>{
    form.style.display= `block`
})
closeForm.onclick= function(){
    form.style.display= `none`
}