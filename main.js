const queryString = window.location.search;
const params = decodeURIComponent(queryString.substring(1));
const name = params.split("=")[1];
console.log(name);

onload = () => {
  document.body.classList.remove("container");
  document.getElementById("name").innerHTML = name;
};
