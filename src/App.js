import React, { useState } from "react";
import "./styles.css";

var bookDictionary = {
  ScienceFiction: [
    [
      "Divergent",
      "Veronica Roth",
      "It is a dystopian, teen-fiction. It is fun to read and engaging. Though, it could have been more thought-provoking and thrilling",
      "3/5"
    ],
    [
      "Unwind",
      "Neil Shusterman",
      "This book is on the powerlessness of children in the hands of their irresponsible gaurdians. It is a blend of nerve-wracking and sad. If you get affected easily affected, this book is not for you ",
      "4.5/5"
    ],
    [
      "The Devil You Know (Mercenary Librarians #2)",
      "Kit Rocha",
      "Genetically engineered Maya has escaped the TechCorps. Gray has finally broken free of the Protectorate. Together, can they stop an operation trading in genetically enhanced children",
      "4.25/5"
    ]
  ],
  HistoricalFiction: [
    [
      "The Three Musketeers",
      "Alexandre Dumas",
      "Set during the french revolution, the three musketeers is a engaging adventure where the musketeers fight for justice.",
      "4/5"
    ],
    [
      "The Scarlet Pimpernel",
      "Baroness Orczy",
      "Follow Percy Blackney as he saves the innocent during the French Revolution.This is the third book in a series; can be read as a stand-alone",
      "4.5/5"
    ],
    [
      "Around the World in 80 Days",
      "Jules Verne",
      "Can Phileas Fogg and his servant win the challenge to travel the world in 80 days?",
      "3.75/5"
    ]
  ],
  Mystery: [
    [
      "Murder on the Orient Express",
      "Agatha Christy",
      "Join Detective Poirot on his journey to uncover the murder mystery of an American Tycoon",
      "4.2"
    ],
    [
      "The Strange Case of Dr.Jekyll and Mr.Hyde",
      "R L Stevenson",
      "This novella is one of the best potrayals of two sides of a living being.",
      "3.8/5"
    ],
    [
      "A Race Against time (Nancy Drew: Girl Detective #2)",
      "Carolyn Keene",
      "Follow Nancy Drew in her quest to find the money stolen in 2 days",
      "3.8/5"
    ]
  ]
};
var bookList = Object.keys(bookDictionary);

export default function App() {
  const [genre, setGenre] = useState([]);

  function genreInputHandler(event) {
    var input = event.target.value;
    var g;
    if (input in bookDictionary) {
      g = bookDictionary[input];
    } else {
      g = "We don't have this genre in our review system, sorry!!";
    }
    setGenre(g);
  }

  function genreClickHandler(emoji) {
    var g = bookDictionary[emoji];
    setGenre(g);
  }
  return (
    <div className="App">
      <h1> Book Reviews</h1>
      <label for="input-genre">Search Genre: </label>
      <input id="input-genre" onChange={genreInputHandler} />
      <hr />
      <h2>Genres in Dictionary</h2>
      <section>
        {bookList.map((genre) => {
          return (
            <span onClick={() => genreClickHandler(genre)} key={genre}>
              {genre}
            </span>
          );
        })}
        <hr />
        <ul>
          {genre.map((book) => {
            return (
              <li key={book} className=".container">
                <p> {book[0]}</p>
                <p> {book[1]}</p>
                <p> {book[2]}</p>
                <p> {book[3]}</p>
              </li>
            );
          })}
        </ul>
      </section>
    </div>
  );
}
