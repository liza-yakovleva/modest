// !Form Send Message

let sendMessageBtns = document.querySelector(".sec__7-btn");
let formSendMessage = document.querySelector(".sec__7-form")
let closeBtn = document.querySelector(".btn-close")

function closeFormSendMessage() {
  formSendMessage.classList.remove("form-show");
  formSendMessage.classList.add("form-hide");
}

function openFormSendMessage() {
  formSendMessage.classList.add("form-show");
  formSendMessage.classList.remove("form-hide");
}

sendMessageBtns.addEventListener("click", openFormSendMessage)
closeBtn.addEventListener("click", closeFormSendMessage)




// !mobile menu
let mobileMenu = document.querySelector('.nav-mobile-menu')
let mainMenu = document.querySelector('.navigation')

mobileMenu.addEventListener("click", function () {
  mobileMenu.classList.toggle("active-menu");
  if (mobileMenu.classList.contains("active-menu")) {
    mainMenu.classList.add("active-menu")
  } else {
    mainMenu.classList.remove("active-menu")
  }
})

//! open modal in 50% scroll
let modalSub = document.querySelector(".modal-sub")
let closeBtnSub = document.querySelector(".modal-sub-btn-close")

function closeModalSub() {
  modalSub.classList.remove("modal-sub-show");
  modalSub.classList.add("modal-sub-hide");
}

function openModalSub() {
  modalSub.classList.add("modal-sub-show");
  modalSub.classList.remove("modal-sub-hide");
}


function showModalByScroll() {
  if (window.pageYOffset > document.documentElement.scrollHeight / 2) {
    openModalSub();
    window.removeEventListener("scroll", showModalByScroll);
  }
}
window.addEventListener("scroll", showModalByScroll);

closeBtnSub.addEventListener("click", closeModalSub);

//! close modal when click on  place around
window.addEventListener('click', function(e) {
  if (e.target !== modalSub) {
     closeModalSub()
  }
});













