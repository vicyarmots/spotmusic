import React, { useState } from "react";
import SearchButton from "../SearchButton";

const SearchField = () => {
  const [value, setValue] = useState("");
  return (
    <form className="search-form">
      <input
        type="text"
        placeholder="Search for ..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <SearchButton value={value} />
    </form>
  );
};

export default SearchField;
