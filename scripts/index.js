const initialCards = [
  {
    name: "Val Thorens",
    link: "./images/1-photo-by-moritz-feldmann-from-pexels.jpg",
  },
  {
    name: "Restaurant terrace",
    link: "./images/2-photo-by-ceiline-from-pexels.jpg",
  },
  {
    name: "An outdoor cafe",
    link: "./images/3-photo-by-tubanur-dogan-from-pexels.jpg",
  },
  {
    name: "A very long bridge, over the forest in the middle of the jungle",
    link: "./images/4-photo-by-maurice-laschet-from-pexels.jpg",
  },
  {
    name: "Tunnel with morning light",
    link: "./images/5-photo-by-van-anh-nguyen-from-pexels.jpg",
  },
  {
    name: "Mountain house",
    link: "./images/6-photo-by-moritz-feldmann-from-pexels.jpg",
  },
];

const cardsContainer = document.querySelector(".cards__list");
const cardTemplate = document.querySelector("#card-template");

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

const previewModal = document.querySelector("#preview-modal");
const previewImg = previewModal.querySelector(".modal__image");
const previewCaption = previewModal.querySelector(".modal__caption");
const previewCloseBtn = previewModal.querySelector(".modal__close-btn");

function openModal(modal) {
  modal.classList.add("modal_is-opened");
}
function closeModal(modal) {
  modal.classList.remove("modal_is-opened");
}

editProfileBtn.addEventListener("click", () => {
  editProfileNameInput.value = profileNameL.textContent;
  editProfileDescriptionInput.value = profileDescriptionL.textContent;
  openModal(editProfileModal);
});
editProfileCloseBtn.addEventListener("click", () =>
  closeModal(editProfileModal)
);

function handleEditProfileSubmit(evt) {
  evt.preventDefault();
  profileNameL.textContent = editProfileNameInput.value.trim();
  profileDescriptionL.textContent = editProfileDescriptionInput.value.trim();
  closeModal(editProfileModal);
}
editProfileForm.addEventListener("submit", handleEditProfileSubmit);

newPostBtn.addEventListener("click", () => openModal(newPostModal));
newPostCloseBtn.addEventListener("click", () => closeModal(newPostModal));

function handleNewPostSubmit(evt) {
  evt.preventDefault();

  const data = {
    name: newPostCaptionInput.value.trim(),
    link: newPostLinkInput.value.trim(),
  };
  if (!data.name || !data.link) return;

  const card = getCardElement(data);
  cardsContainer.prepend(card);

  newPostForm.reset();
  closeModal(newPostModal);
}
newPostForm.addEventListener("submit", handleNewPostSubmit);

function getCardElement(data) {
  const cardElement = cardTemplate.content
    .querySelector(".card")
    .cloneNode(true);

  const img = cardElement.querySelector(".card__image");
  const title = cardElement.querySelector(".card__title");
  const likeBtn = cardElement.querySelector(".card__like-btn");
  const deleteBtn = cardElement.querySelector(".card__delete-btn");

  title.textContent = data.name;
  img.src = data.link;
  img.alt = data.name;

  likeBtn.addEventListener("click", () => {
    likeBtn.classList.toggle("card__like-btn_active");
  });

  deleteBtn.addEventListener("click", () => {
    cardElement.remove();
  });

  img.addEventListener("click", () => {
    previewCaption.textContent = data.name;
    previewImg.src = data.link;
    previewImg.alt = data.name;
    openModal(previewModal);
  });

  return cardElement;
}

initialCards.forEach((item) => {
  const card = getCardElement(item);
  cardsContainer.prepend(card);
});

previewCloseBtn.addEventListener("click", () => closeModal(previewModal));
