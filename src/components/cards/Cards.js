import React, { useState } from "react";
import axios from "axios";

function Cards() {
  const URL = "http://localhost:8080/cleaner/";
  const Cleane = () => {
    try {
      axios.get(`${URL}`).then((res) => {
        if (res) {
          console.log(res);
        }
      });
    } catch (error) {
      console.log(error.message);
    }
  };

  const styles = {
    container: {
      marginTop: "1.5rem",
      backgroundColor: "#FFFFFF",
      display: "grid",
      gridTemplateColumns: "repeat(1, 1fr)",
      gridTemplateRows: "1fr",
      height: "27rem",
    },
    cards: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-around",
      width: "100%",
    },
    card: {
      fontWeight: "500",
      letterSpacing: "2px",
      backgroundColor: "#1A83D9",
      color: "#FFFFFF",
      width: "22%",
      height: "50%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column",
      cursor: "pointer",
    },
  };
  return (
    <div style={styles.container}>
      <div className="cards" style={styles.cards}>
        <div className="card" style={styles.card} onClick={() => {}}>
          <div className="icon"></div>
          <div className="" onClick={() => Cleane()}>
            <span>NETTOYER</span>
          </div>
        </div>
        <div className="card" style={styles.card} onClick={() => {}}>
          <div className="icon"></div>
          <div className="">
            <span>HISTORIQUE</span>
          </div>
        </div>
        <div className="card" style={styles.card} onClick={() => {}}>
          <div className="icon"></div>
          <div className="">
            <span>METTRE A JOUR</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
