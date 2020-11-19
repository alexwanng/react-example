import React from 'react';

const Book = (props) => {
    const {img, title, author, children} = props;
    const clickHandler = (e) => {
        console.log(e.target);
        console.log(e);
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

export default Book;