import React from "react";

const SearchButton = ({ value }) => {
  return value && <button className="search-btn">Search</button>;
};

export default SearchButton;
