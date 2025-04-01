document.addEventListener("DOMContentLoaded", function () {
    const fontSizeLinks = document.querySelectorAll('.font-size');
    const book = document.getElementById('book');

    fontSizeLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            fontSizeLinks.forEach(link => link.classList.remove('font-size_active'));
            this.classList.add('font-size_active');
            book.classList.remove('book_fs-big', 'book_fs-small');
            const size = this.getAttribute('data-size');
            if (size === 'small') {
                book.classList.add('book_fs-small');
            } else if (size === 'big') {
                book.classList.add('book_fs-big');
            }
        });
    });

    const colorLinks = document.querySelectorAll('.color');
    colorLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            colorLinks.forEach(link => link.classList.remove('color_active'));
            this.classList.add('color_active');
            book.classList.remove('book_color-black', 'book_color-gray', 'book_color-whitesmoke');
            const color = this.getAttribute('data-text-color');
            if (color) {
                book.classList.add(`book_color-${color}`);
            }
        });
    });

    const bgLinks = document.querySelectorAll('.bg_color');
    bgLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            bgLinks.forEach(link => link.classList.remove('color_active'));
            this.classList.add('color_active');
            book.classList.remove('book_bg-black', 'book_bg-gray', 'book_bg-white');
            const bgColor = this.getAttribute('data-bg-color');
            if (bgColor) {
                book.classList.add(`book_bg-${bgColor}`);
            }
        });
    });
});
