import React from "react";

function SideBar() {
  const styles = {
    container: {},
    header: {
      backgroundColor: "#1064AC",
    },
    titles: {
      display: "flex",
      flexDirection: "column",
      alignItems: "start",
      letterSpacing: "2px",
      fontWeight: "500",
    },
    title: {
      display: "flex",
      justifyContent: "center",
      padding: "2.5rem 0.8rem",
    },
    list: {
      backgroundColor: "#1A83D9",
      height: "98%",
    },
    ul: {
      padding: "0",
      textAlign: "left",
    },
    li: {
      listStyle: "none",
      fontSize: "12px",
      fontWeight: "500",
      color: "#FFFFFF",
      padding: "0.8rem ",
      borderBottom: "1px solid #1064AC",
      cursor: "pointer",
      height: "3.5rem",
      display: "flex",
      alignItems: "center",
      justifyContent: "start",
    },
    lastLi: {
      height: "10rem",
      backgroundColor: "#1064AC",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    button: {
      backgroundColor: "#1A83D9",
      padding: "0.7rem 4rem",
      border: "none",
      color: "#FFFFFF",
      fontWeight: "600",
      fontSize: "12px",
      cursor: "pointer",
    },
  };
  return (
    <>
      <div className="header" style={styles.header}>
        <div className="title" style={styles.title}>
          <div style={styles.titles}>
            <span style={{ color: "#1A83D9" }}>ANTHONY</span>{" "}
            <span style={{ color: "#FFFFFF" }}>PC-CLEANER</span>
          </div>
        </div>
      </div>
      <div className="list" style={styles.list}>
        <ul style={styles.ul}>
          <li style={styles.li} onClick={() => {}}>
            VUE D'ENSEMBLE
          </li>
          <li style={styles.li} onClick={() => {}}>
            ANALYSER
          </li>
          <li style={styles.li} onClick={() => {}}>
            HISTORIQUE
          </li>
          <li style={styles.li} onClick={() => {}}>
            OPTIONS
          </li>
          <li style={styles.lastLi}>
            <button type="submit" style={styles.button}>
              SITE WEB
            </button>
          </li>
        </ul>
      </div>
    </>
  );
}

export default SideBar;
