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
        {books.map((book, index) => {
            const {img, title, author} = book;
            return <Book key={index} {...book}/>
        })}
    </section>
  );
}

const Book = (props) => {
  const {img, title, author, children} = props;
  const clickHandler = () => {
      alert('hello world');
  };

  const complexExample = (author) => {
      console.log(author);
  };


  //console.log(props);
  return (
    <article className="book">
      <img src={img} alt="" />
      <h1 onClick={() => console.log(title)}>{title}</h1>
      <h4> {author} </h4>
        <button type="button" onClick={clickHandler}>Reference example</button>
        {/** it needs to () => to pass auguments to function **/}
        <button type='button' onClick={() => complexExample(author)}>complex Example</button>
      <hr />
    </article>
  );
};

export default () => <BookList />;
