import React from "react";
import styles from "./MainLayout.module.css";
import ArtistInfoPage from "../../pages/ArtistInfoPage";
import { Header } from "../../components";

const MainLayout = () => {
  return (
    <div className={styles.mainLayout}>
      <Header />
      <ArtistInfoPage />
    </div>
  );
};

export default MainLayout;
