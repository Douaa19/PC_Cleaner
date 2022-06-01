import React from "react";
import SideBar from "./side-bar/SideBar";
import Header from "./header/Header";
import Cards from "./cards/Cards";
import Footer from "./footer/Footer";

function Home() {
  const styles = {
    container: {
      display: "grid",
      gridTemplateColumns: "repeat(6, 1fr)",
      gridTemplateRows: "repeat(1, 1fr)",
    },
    sideBar: {
      gridArea: "1 / 1 / 2 / 2",
      maxHeight: "85%",
    },
    main: {
      gridArea: "1 / 2 / 12 / 7",
      backgroundColor: "#eee",
    },
  };
  return (
    <div style={styles.container}>
      <div className="side-bar" style={styles.sideBar}>
        <SideBar />
      </div>
      <div className="main" style={styles.main}>
        <div className="header">
          <Header />
        </div>
        <div className="cards">
          <Cards />
        </div>
        <div className="footer">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Home;
