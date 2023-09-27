const params = new URLSearchParams(window.location.search);
const id = params.get("id")

const bookLink = "https://striveschool-api.herokuapp.com/books/"+ id;
let book = {}


window.onload = getBook;

function getBook() {
    let requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };
      
      fetch(bookLink , requestOptions)
        .then(response => response.json())
        .then((response) => {
            book = response;
            console.log(book);
            displayBook(response);
        })
        .catch(error => console.log('error', error));
}

function displayBook(response) {
document.getElementById("title").innerHTML = book.title;
document.querySelector("img").src = book.img;
document.getElementById("category").innerHTML = "Category :"+book.category;
document.getElementById("price").innerHTML = "Price :"+book.price+" $";
document.getElementById("asin").innerHTML = "Asin :"+book.asin;
}

