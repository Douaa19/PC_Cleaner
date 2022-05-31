import React from "react";
import SideBar from "./side-bar/SideBar";
import Header from "./header/Header";

function Home() {
  const styles = {
    container: {
      display: "grid",
      gridTemplateColumns: "repeat(6, 1fr)",
      gridTemplateRows: "1fr",
    },
    sideBar: {
      gridArea: "1 / 1 / 2 / 2",
    },
    main: {
      gridArea: "1 / 2 / 2 / 6",
    },
  };
  return (
    <div style={styles.container}>
      <div className="main" style={styles.main}>
        <div className="header">
          <Header />
        </div>
        <div className="cards"></div>
      </div>
      <div className="side-bar" style={styles.sideBar}>
        <SideBar />
      </div>
    </div>
  );
}

export default Home;
