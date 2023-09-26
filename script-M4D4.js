const booksArea = document.getElementById("booksSection");
const searchInput = document.getElementById("searchInput");

let booksTotal = [];
let visibleBooks = [];
let cartBooks = [];

window.onload = getBooks;

function getBooks() {
  let requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };
  
  fetch("https://striveschool-api.herokuapp.com/books", requestOptions)
    .then(r => r.json())
    .then((data) => {
      booksTotal = data;
      visibleBooks = data;
      displayBooks(data);
      console.log(data);
    })
    
    .catch(error => {
      console.log(error.message)
  })
}

function displayBooks(data) {
  const booksTotal = data.map((book) => {
    booksArea.innerHTML +=
    /*html*/ 
    ` <div class='col col-3'> 
          <div class="card mb-4 shadow-sm">
            <img src=${book.img}>
            <div class="card-body">
            <h6>${book.title}</h6>
            <div class="d-flex justify-content-around align-items-center">
              <button class="btn btn-primary">Price: ${book.price}$</button>
              <button class="btn btn-secondary">Skip</button>
              <a href="/book.html?id=${book.asin}"class="btn btn-info">Info</a>
            </div>
            </div>
          </div>
      </div>
      `
  })
}

