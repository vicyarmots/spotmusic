import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchArtist } from "../../store/artist/artistSlice";
import { SearchField } from "../../components";

const ArtistInfoPage = () => {
  const artist = useSelector((state) => state.artist);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchArtist());
  }, [dispatch]);

  return (
    <div>
      <SearchField />
      {artist}
    </div>
  );
};

export default ArtistInfoPage;
