import React from "react";

import "./booklist.css";

import {books} from "./books";

import Book from "./book";


function BookList() {
  return (
    <section className="booklist">
        {books.map((book, index) => {
            const {img, title, author} = book;
            return <Book key={index} {...book}/>
        })}
    </section>
  );
}


export default () => <BookList />;
