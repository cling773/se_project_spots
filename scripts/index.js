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

editProfileBtn.addEventListener("click", function () {
  editProfileNameInput.value = profileNameL.textContent;
  editProfileDescriptionInput.value = profileDescriptionL.textContent;
  openModal(editProfileModal);
});

editProfileCloseBtn.addEventListener("click", function () {
  closeModal(editProfileModal);
});

newPostBtn.addEventListener("click", function () {
  openModal(newPostModal);
});

newPostCloseBtn.addEventListener("click", function () {
  closeModal(newPostModal);
});

function handleEditProfileSubmit(evt) {
  evt.preventDefault();
  profileNameL.textContent = editProfileNameInput.value;
  profileDescriptionL.textContent = editProfileDescriptionInput.value;
  closeModal(editProfileModal);
}

editProfileForm.addEventListener("submit", handleEditProfileSubmit);

function handleNewPostSubmit(evt) {
  evt.preventDefault();
  console.log("Caption:", newPostCaptionInput.value);
  console.log("Link:", newPostLinkInput.value);
  closeModal(newPostModal);
}
newPostForm.addEventListener("submit", handleNewPostSubmit);

function openModal(modal) {
  modal.classList.toggle("modal_is-opened");
}
function closeModal(modal) {
  modal.classList.remove("modal_is-opened");
}
