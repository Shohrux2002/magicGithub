`use strict`;

const inputSearch = document.querySelector(".search--input");
const userImg = document.querySelector(".user--img");
const btnView = document.querySelector(".btn--account");
const repos = document.querySelector(".repos");
const gists = document.querySelector(".gists");
const followers = document.querySelector(".followers");
const following = document.querySelector(".following");
const company = document.querySelector(".com--name");
const lacation = document.querySelector(".location");
const site = document.querySelector(".site");
const since = document.querySelector(".since");
const reposSection = document.querySelector(".section--repos");
const sectioninfo = document.querySelector(".user__info");

let data;
const getProfile = async function (user) {
  let dataJson = await fetch(
    `https://api.github.com/users/${user}?client_id=ece4c682d08cf8d98c2d&client_secret=979fc6bcfa120a5b09f8bdd500704632324b9b70`
  );
  data = await dataJson.json();
  // console.log(data);
  return data;
};

let inputType = async function () {
  try {
    inputSearch.addEventListener("input", function () {
      const getProfile = async function () {
        let dataJson = await fetch(
          `https://api.github.com/users/${inputSearch.value}?client_id=ece4c682d08cf8d98c2d&client_secret=979fc6bcfa120a5b09f8bdd500704632324b9b70`
        );
        data = await dataJson.json();
        let datarepo = await fetch(`
        https://api.github.com/users/${inputSearch.value}/repos?per_page=created: asc&sort=5&client_id=65b44d46d520be1f19c7&client_secret=7287ef205413001a79b30f0fbcc04416153ef797
      `);
        let data1 = await datarepo.json();
        reposSection.textContent = "";
        data1.forEach((element) => {
          html = `<div class="box">
        <a href="" class="repos-name">${element.name}</a>
        <div class="btns mar">
          <a href="" class="btn--starts btn">Start: ${element.stargazers_count}:</a>
          <a href="" class="btn--watch btn">Watchers: ${element.watchers_count}</a>
          <a href="" class="btn--forks btn">Forks: ${element.forks_count}</a>
        </div>
      </div>`;
          reposSection.insertAdjacentHTML("afterbegin", html);
        });
        // console.log(data);
        console.log(data);
        company.textContent = data.company;
        site.textContent = data.blog;
        lacation.textContent = data.location;
        since.textContent = data.created_at;
        userImg.src = data.avatar_url;
        btnView.href = data.html_url;
        repos.textContent = data.public_repos;
        gists.textContent = data.public_gists;
        followers.textContent = data.followers;
        following.textContent = data.following;
      };
      getProfile();
      console.log(getProfile());
    });
  } catch (err) {
    return err;
  }
};
inputType();
