import "./styles.css";

const request = new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v3.1/name/Nepal");
request.send();

request.addEventListener("load", function () {
  const [data] = JSON.parse(this.responseText);
  console.log(data);
  document.getElementById("app").innerHTML = `
<h1> Capital of ${data.name.common} is ${data.capital}</h1>
<div>
  
</div>
`;
});
