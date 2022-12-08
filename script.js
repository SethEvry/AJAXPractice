const form = document.getElementById("form");
const joke = document.querySelector(".joke");

const createQuotes = (quotes) => {
  for (let quote of quotes) {
    const p = document.createElement("p");
    p.textContent = quote.value;
    p.addEventListener("click", () => {
      p.classList.toggle("focus");
      document.body.classList.toggle("wrapper");
    });
    joke.appendChild(p);
  }
};

const handleSubmit = (e) => {
  e.preventDefault();
  const value = e.target[0].value;
  const url = "https://api.chucknorris.io/jokes/search?query=" + value;
  /*
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = () => {
        if(xhttp.readyState == 4 && xhttp.status == 200){
            let quotes = JSON.parse(xhttp.responseText).result;
            createQuotes(quotes);
        } else if(xhttp.readyState == 4 && xhttp.status == 404) {
            aler('That is not a valid request!')
        }
    }
    xhttp.open("GET", url);
    xhttp.send();
    */
  fetch(url)
    .then((res) => res.json())
    .then((json) => {
      createQuotes(json.result);
    });
};

form.addEventListener("submit", handleSubmit);
