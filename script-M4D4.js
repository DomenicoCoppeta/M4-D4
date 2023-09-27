const booksArea = document.getElementById("booksSection");
const searchInput = document.getElementById("searchInput");

let booksTotal = [];
let visibleBooks = [];
let cartBooks = [];

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

window.onload = getBooks;




// const filterInput = document.getElementById("searchInput");
// const resultsList = document.getElementById("resultsList");

// filterInput.addEventListener("input", function() {
//   const searchText = filterInput.value.toLowerCase();
//   const filteredBooks = library.filter(book => {
//   return (
//     book.title.toLowerCase().includes(searchText) ||
//     book.author.toLowerCase().includes(searchText)
//       );
//     });
//     displayResults(filteredBooks);  
//   });
//   function displayResults(books) {
//     booksArea.innerHTML = '';
//     if (books.length === 0) {
//       booksArea.innerHTML = 'No Match';
//       return;
//     }
  
//   books.forEach(book => {
    
//   });
//   }
