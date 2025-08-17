const editProfileBtn = document.querySelector(".profile__edit-btn");
const editProfileModal = document.querySelector("#edit-profile-modal");
const editProfileCloseBtn = editProfileModal.querySelector(".modal__close-btn");
const editProfileForm = editProfileModal.querySelector(".modal__form");

const editProfileNameInput = editProfileModal.querySelector(
  "#profile-name-input"
);
const editProfileDescriptionInput = editProfileModal.querySelector(
  "#profile-description-input"
);

const profileNameL = document.querySelector(".profile__name");
const profileDescriptionL = document.querySelector(".profile__description");

const newPostBtn = document.querySelector(".profile__add-btn");
const newPostModal = document.querySelector("#new-post-modal");
const newPostCloseBtn = newPostModal.querySelector(".modal__close-btn");
const newPostForm = newPostModal.querySelector(".modal__form");

const newPostCaptionInput = newPostModal.querySelector("#card-caption-input");
const newPostLinkInput = newPostModal.querySelector("#card-image-input");

const postCaptionL = document.querySelector(".card__title");
const postLinkL = document.querySelector(".card__image");

editProfileBtn.addEventListener("click", function () {
  editProfileNameInput.value = profileNameL.textContent;
  editProfileDescriptionInput.value = profileDescriptionL.textContent;
  editProfileModal.classList.toggle("modal_is-opened");
});

editProfileCloseBtn.addEventListener("click", function () {
  editProfileModal.classList.remove("modal_is-opened");
});

newPostBtn.addEventListener("click", function () {
  newPostModal.classList.toggle("modal_is-opened");
});

newPostCloseBtn.addEventListener("click", function () {
  newPostModal.classList.remove("modal_is-opened");
});

function handleEditProfileSubmit(evt) {
  evt.preventDefault();
  profileNameL.textContent = editProfileNameInput.value;
  profileDescriptionL.textContent = editProfileDescriptionInput.value;
  editProfileModal.classList.remove("modal_is-opened");
}

editProfileForm.addEventListener("submit", handleEditProfileSubmit);

function handleNewPostSubmit(evt) {
  evt.preventDefault();
  console.log("Caption:", newPostCaptionInput.value);
  console.log("Link:", newPostLinkInput.value);

  newPostModal.classList.remove("modal_is-opened");
}
newPostForm.addEventListener("submit", handleNewPostSubmit);
