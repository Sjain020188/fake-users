// const endpoint = "http://localhost:3000/languages/";
const users = [];
// fetch("http://localhost:3000/languages")
//   .then((data) => data.json())
//   .then((langs) => languages.push(...langs));

const searchButton = document.querySelector(".search-form .btn");
const resulted_users = document.querySelector(".resulted_users");
const modal = document.querySelector("#myModal");
const close = document.querySelector(".close");

const generateRatingStars = (n) => {
  let stars = "";
  for (let i = 0; i < n; i++) {
    stars = stars + "<i class='fa fa-star checked' />";
  }
  return stars;
};

const closeModal = () => {
  modal.style.display = "none";
};

searchButton.addEventListener("click", (e) => {
  const langInput = document.querySelector("#searchInput").value;
  const endpoint = `http://localhost:3000/users/${langInput}`;

  fetch(endpoint)
    .then((data) => data.json())
    .then((matchedUsers) => {
      const userData = matchedUsers
        .map((user) => {
          const b = generateRatingStars(user.credits);

          return `<div><span>${user.name}</span><span>${
            user.country
          }</span><span><a href=mailto:${
            user.email
          }><i class="fas fa-envelope"></i></a></span><span><a href=tel:${
            user.mob_number
          }><i class="fas fa-phone"></i></a></span></div>`;
        })
        .join("");
      resulted_users.innerHTML =
        "<div class='userDataHeader'><span>Name</span><span>Country</span><span>Email</span><span>Phone</span></div>" +
        userData;
    });
});

document.querySelector(".navbar-signup").addEventListener("click", (e) => {
  modal.style.display = "block";
});

close.addEventListener("click", closeModal);
