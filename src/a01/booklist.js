import React from "react";

import "./booklist.css";

const books = [
    {
        img: "https://m.media-amazon.com/images/I/51QBoRpApkL.jpg",
        title: "Devolution: A Firsthand Account of the Rainier Sasquatch",
        author: "Max Brooks"
    },

    {
        img: "https://m.media-amazon.com/images/I/51n0VhTxftL._SY346_.jpg",
        title: "The City We Became",
        author: "N. K. Jemisin"
    }
];




function BookList() {
  return (
    <section className="booklist">
        {books.map((book) => {
            const {img, title, author} = book;
            return <Book img={img} title={title} author={author}/>
        })}
    </section>
  );
}

const Book = (props) => {
  const {img, title, author, children} = props;
  //console.log(props);
  return (
    <article className="book">
      <img src={img} alt="" />
      <h1>{title}</h1>
      <h4>{author}</h4>
        {children}
      <hr />
    </article>
  );
};

export default () => <BookList />;
