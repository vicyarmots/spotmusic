import { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchArtist } from "../store/artist/fetchArtist";

const useFetchArtist = (initialState = "") => {
  const [value, setValue] = useState(initialState);

  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(fetchArtist(value));
    setValue("");
  };

  return { value, handleInputChange, handleSubmit };
};

export { useFetchArtist };
