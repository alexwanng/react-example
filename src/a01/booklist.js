import React from "react";

import "./booklist.css";

const firstBook = {
  img: "https://m.media-amazon.com/images/I/51QBoRpApkL.jpg",
  title: "Devolution: A Firsthand Account of the Rainier Sasquatch",
  author: "Max Brooks"
};

const secondBook = {
  img: "https://m.media-amazon.com/images/I/51n0VhTxftL._SY346_.jpg",
  title: "The City We Became",
  author: "N. K. Jemisin"
};

function BookList() {
  return (
    <section className="booklist">
      <Book
        img={firstBook.img}
        title={firstBook.title}
        author={firstBook.author}
      />

      <Book
        img={secondBook.img}
        title={secondBook.title}
        author={secondBook.author}
      />
    </section>
  );
}

const Book = ({ img, title, author }) => {
  //const {img, title, author} = props;
  //console.log(props);
  return (
    <article className="book">
      <img src={img} alt="" />
      <h1>{title}</h1>
      <h4>{author}</h4>
      <hr />
    </article>
  );
};

export default () => <BookList />;
