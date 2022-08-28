const quoteByKanyeElement = document.querySelector("#quote-by-kanye");
quoteByKanyeElement.textContent = '';

const kanyeImageElement = document.querySelector("#kanye-image");

function refreshQuote() {
    fetch("https://api.kanye.rest/").then((response) => {
        response.json().then((data) => {
            quoteByKanyeElement.textContent = data.quote;
        });
    });
}
