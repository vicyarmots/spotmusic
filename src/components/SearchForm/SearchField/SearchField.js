import React from "react";
import SearchButton from "../SearchButton";
import { useFetchArtist } from "../../../hooks/useFetchArtist";

const SearchField = () => {
  const { value, handleInputChange, handleSubmit } = useFetchArtist("");

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search for ..."
        value={value}
        onChange={handleInputChange}
      />
      <SearchButton value={value} />
    </form>
  );
};

export default SearchField;
