import React from "react";
import { FaArrowRight } from "react-icons/fa";
import "./search.css";

const Search = () => {
  return (
    <section className='search'>
      <h1 className='search--header'>How can we help?</h1>
      <form action='' className='search-form'>
        <input type='text' name='' id='' placeholder='Search' />
        <button type='submit'>
          <FaArrowRight />
        </button>
      </form>
    </section>
  );
};

export default Search;
