import React from "react";

import "./booklist.css";

import {books} from "./books";

import SpecificBook from "./book";


function BookList() {
  return (
    <section className="booklist">
        {books.map((book, index) => {
            const {img, title, author} = book;
            return <SpecificBook key={index} {...book}/>
        })}
    </section>
  );
}


export default () => <BookList />;
