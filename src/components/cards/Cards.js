import React from "react";

function Cards() {
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
      fontWeight: "bold",
      backgroundColor: "#1A83D9",
      color: "#FFFFFF",
      width: "22%",
      height: "60%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column",
    },
  };
  return (
    <div style={styles.container}>
      <div className="cards" style={styles.cards}>
        <div className="card" style={styles.card}>
          <div className="icon"></div>
          <div className="" onClick={() => {}}>
            <h3>NETTOYER</h3>
          </div>
        </div>
        <div className="card" style={styles.card}>
          <div className="icon"></div>
          <div className="" onClick={() => {}}>
            <h3>HISTORIQUE</h3>
          </div>
        </div>
        <div className="card" style={styles.card}>
          <div className="icon"></div>
          <div className="" onClick={() => {}}>
            <h3>METTRE A JOUR</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
