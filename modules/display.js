export default function displayele() {
  const showList = document.querySelector('.list-book-nav');
  const addBook = document.querySelector('.add-book-nav');
  const contactPage = document.querySelector('.contact-nav');
  const form = document.querySelector('.form-section');
  const Con = document.querySelector('.ContactPage');
  const app = document.querySelector('.append');

  showList.addEventListener('click', () => {
    form.style.display = 'none';
    app.style.display = 'block';
    Con.style.display = 'none';
  });

  addBook.addEventListener('click', () => {
    form.style.display = 'block';
    app.style.display = 'none';
    Con.style.display = 'none';
  });

  contactPage.addEventListener('click', () => {
    form.style.display = 'none';
    app.style.display = 'none';
    Con.style.display = 'block';
  });
}