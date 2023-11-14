const container = document.querySelector('.container');
const form = document.querySelector('.form');

let myLibrary = [];

function Book(name, author, pages, read) {
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function displayBook() {
    const name = document.querySelector('#name').value;
    const author = document.querySelector('#author').value;
    const pages = document.querySelector('#pages').value;
    const read = document.querySelector('#read');
    const newBook = new Book(name, author, pages, read);
    myLibrary.push(newBook);
    addBookToLibrary();

    const currentBook = myLibrary.length - 1;

    const books = document.createElement('div');
    books.setAttribute('class', 'books');
    container.appendChild(books);

    const buttons = document.createElement('div');
    buttons.setAttribute('class', 'buttons');
    books.appendChild(buttons); 

    const readButton = document.createElement('img');
    readButton.setAttribute('class', 'read-btn');
    readButton.setAttribute('src', 'eye.svg');
    buttons.appendChild(readButton);
    readButton.addEventListener('click', () => {
        if (displayRead.textContent === 'Completed') {
            displayRead.textContent = 'Not completed yet';
            displayRead.style.cssText = 'color: red;'
        } else {
            displayRead.textContent = 'Completed';
            displayRead.style.cssText = 'color: green;'
        }
    })

    const deleteButton = document.createElement('img');
    deleteButton.setAttribute('class', 'delete-btn');
    deleteButton.setAttribute('src', 'trash-can.svg');
    buttons.appendChild(deleteButton);

    deleteButton.addEventListener('click', () => {
        container.removeChild(books);
        myLibrary.splice(currentBook, 1);
    })

    const info = document.createElement('div');
    info.setAttribute('class', 'info');
    books.appendChild(info);

    const displayName = document.createElement('h2');
    displayName.textContent = `Book name: ${name}`
    info.appendChild(displayName);

    const displayAuthor = document.createElement('h2');
    displayAuthor.textContent = `Author: ${author}`;
    info.appendChild(displayAuthor);

    const displayPages = document.createElement('h2');
    displayPages.textContent = `Pages: ${pages}`;
    info.appendChild(displayPages);

    const displayRead = document.createElement('h2');
    displayRead.setAttribute('class', 'completed');
    if (read.checked) {
        displayRead.textContent = 'Completed';
        displayRead.style.cssText = 'color: green;'
        info.appendChild(displayRead);
    } else {
        displayRead.textContent = 'Not completed yet';
        displayRead.style.cssText = 'color: red;'
        info.appendChild(displayRead);
    }
    console.log(myLibrary);
}

const btn = document.querySelector('#btn');
btn.addEventListener('click', () => {
    form.style.display = 'block';
})

const close = document.querySelector('.close');
close.addEventListener('click', () => {
    form.style.display = 'none';
    clearForm();

})


document.querySelector('#submit').addEventListener('click', () => {
    const name = document.querySelector('#name');
    const author = document.querySelector('#author');
    const pages = document.querySelector('#pages');
    const read = document.querySelector('#read');
    if (name.value != '' && author.value != '' && pages.value != '') {
        displayBook();
        clearForm();
        form.style.display = 'none';
        event.preventDefault();
    }
})

function clearForm() {
    const name = document.querySelector('#name');
    const author = document.querySelector('#author');
    const pages = document.querySelector('#pages');
    const read = document.querySelector('#read');
    name.value = '';
    author.value = '';
    pages.value = '';
    read.checked = false;
}

function addBookToLibrary() {
    for (let i = 0; i <= myLibrary.length; i++) {
        return myLibrary[i];
    }
}

