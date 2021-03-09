const popupEmailLink = document.querySelector(".btn-write");
const popupEmail = document.querySelector(".popup-email");
const popupEmailClose = popupEmail.querySelector(".modal-close");
const popupForm = popupEmail.querySelector("form");

const userName = popupEmail.querySelector("[name=name]");
const userEmail = popupEmail.querySelector("[name=email]");
const userComment = popupEmail.querySelector("[name=comment]");

let isStorageSupport = true;
let storage = "";

try {
  storage = localStorage.getItem("userEmail");
} catch (err) {
  isStorageSupport = false;

}

popupEmailLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  console.log("Кнопка нажата");
  if (popupEmailLink) {
    popupEmail.classList.add("modal-show");
    userName.focus();

    if (storage){
      userEmail.value = storage;
      userName.focus();
    } else {
      userComment.focus();
    }
  };
});

popupEmailClose.addEventListener("click", function(evt){
  evt.preventDefault();
  popupEmail.classList.remove("modal-error");
  popupEmail.classList.remove("modal-show");
  console.log("закрыть");
});

popupForm.addEventListener("submit", function (evt){
  if (!userName.value || !userEmail.value || !userComment.value){
  evt.preventDefault();
  popupEmail.classList.remove("modal-error");
  popupEmail.offsetWidth = popupEmail.offsetWidth;
  popupEmail.classList.add("modal-error");
  console.log("Нужно ввести имя эмайл и написать текст");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("userEmail", userEmail.value);
    }
  }
});



window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (popupEmail.classList.contains("modal-show")) {
      evt.preventDefault();
      popupEmail.classList.remove("modal-show");
      popupEmail.classList.remove("modal-error");
    }
  }
});
