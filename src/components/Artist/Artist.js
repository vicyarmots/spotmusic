import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchChart } from "../../store/chart/fetchChart";

export const Artist = () => {
  const artist = useSelector((state) => state.artist);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchChart());
  }, [dispatch]);

  const isArtist = Object.keys(artist).length !== 0;

  return (
    <div>
      {isArtist &&
        artist.data.map((item) => (
          <a href={item.link} key={item.id}>
            <img src={item.album.cover} alt="logo" />
          </a>
        ))}
    </div>
  );
};
