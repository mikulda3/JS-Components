const result = document.querySelector(".user-list");
const input = document.querySelector(".input-filter");
const userList = [];

getData();

input.addEventListener("input", function(event){
  dataFilter(event.target.value);
});

async function getData(){
  // waits for user to be loaded
  const allUsers = await fetch("https://randomuser.me/api?results=50");

  // transform data
  const data = await allUsers.json();

  // clean the list
  result.innerHTML = "";

  // add users from json to list
  data.results.forEach(user => {
    const li = document.createElement("li");
    li.innerHTML = `
      <img src="${user.picture.large}" alt="${user.name.first}">
      <div class="user-information">
        <h3>${user.name.first} ${user.name.last}</h3>
        <p>${user.location.city}, ${user.location.country}</p>
      </div>
    `;
    result.appendChild(li);
    userList.push(li);
  });
}

function dataFilter(data){
  userList.forEach(user => {
    if(user.innerText.toLowerCase().includes(data.toLowerCase())){
      user.classList.remove("hide");
    } else {
      user.classList.add("hide");
    }
  });
}