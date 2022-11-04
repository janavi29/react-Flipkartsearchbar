import React from 'react';
import './style.css';
import Search from './search';
export default function Search(){
  return(
    <div>Hello Wrold</div>
  )
}
export default function SearchBar() {
  return (
    <form action="/" method="get">
      <label htmlFor="header-search">
        <span className="visually-hidden">Flipkart</span>
      </label>
      <input
        type="text"
        id="header-search"
        placeholder="Search for products brands and more"
        name="s"
      />
      <button type="submit">Search</button>
    </form>
    
  );
}
