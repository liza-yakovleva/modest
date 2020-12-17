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

// !burger-menu
$(function () {
  var link = $('.m-menu-link');
  var close = $('.close-menu');
  var menu = $('.m-header-ul');
  var mLinkCl = $('.header-li-a');
  link.on('click', function (event) {
    event.preventDefault();
    menu.toggleClass('m-menu__active');
  });
  mLinkCl.on('click', function () {
    menu.toggleClass('m-menu__active')
  });
  close.on('click', function (event) {
    event.preventDefault();
    menu.toggleClass('m-menu__active')
  });
});

// ! modal
// let scrollHeight = Math.max(document.body.scrollHeight, document.documentElement.scrollHeight, document.body.offsetHeight, document.documentElement.offsetHeight, document.body.clientHeight, document.documentElement.clientHeight);
// scrollHeight = scrollHeight / 2;

let formModSub = document.querySelector(".modal-sub")
let scrollHeight = document.documentElement.getBoundingClientRect().bottom / 2;
console.log(scrollHeight);

window.addEventListener('scroll', function () {
  let yOffset = window.pageYOffset;
  if (yOffset >= scrollHeight) {
openFormModSub()
  } else {
    closeFormModSub()
  }
 
});
function closeFormModSub() {
  formModSub.classList.remove(".modal-sub-show");
  formModSub.classList.add("modal-sub-hide");
}

function openFormModSub() {
  formModSub.classList.add(".modal-sub-show");
  formModSub.classList.remove("modal-sub-hide");
}

