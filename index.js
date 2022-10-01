import {
  creatli, titin, autna,
} from './modules/variables.js';

import Book from './modules/class.js';

import { DateTime } from './modules/date.js';

import displayele from './modules/display.js';

class Bookadd {
  constructor() {
    this.books = [];
    if (localStorage.books) this.books = JSON.parse(localStorage.getItem('books'));
  }

  additems() {
    let cards = '';
    for (let i = 0; i < this.books.length; i += 1) {
      const items = `
        <ul class="book-items">
        <li>${this.books[i].title} by ${this.books[i].author} </li>
        <button type="button" id = "${i}" class="remove">remove</button>
        </ul>
        `;

      cards += items;
    }

    creatli.innerHTML = cards;
    this.removeBooks();
  }

  addBook() {
    const book = new Book(titin.value, autna.value);
    this.books.push(book);
    this.additems();
    localStorage.setItem('books', JSON.stringify(this.books));
    titin.value = '';
    autna.value = '';
  }

  removeBooks() {
    const removebtn = document.querySelectorAll('.remove');
    removebtn.forEach((elem) => {
      elem.addEventListener('click', () => {
        elem.parentNode.remove();
        const ind = elem.id;
        this.books.splice(ind, 1);
        localStorage.setItem('books', JSON.stringify(this.books));
        this.additems();
      });
    });
  }
}

const bookplus = new Bookadd();
bookplus.additems();

const btnadd = document.getElementById('add');

btnadd.addEventListener('click', () => {
  bookplus.addBook();
});

displayele();

const displaydate = document.querySelector('.date');
displaydate.innerHTML = DateTime.now().toFormat('MMMM dd, yyyy');
