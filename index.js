function fetchBooks() {
  // To pass the tests, don't forget to return your fetch!
  async function fetchBooks() {
    try {
      // Fetch data from the API
      const response = await fetch('https://anapioficeandfire.com/api/books');
      
      // Check if the response is successful
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      
      // Parse the response body as JSON
      const data = await response.json();
      
      // Call renderBooks function with the fetched data
      renderBooks(data);
      
    } catch (error) {
      // Handle any errors that occur during fetching or parsing
      console.error('Error fetching books:', error);
    }
  }
  
    }
  


function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});
