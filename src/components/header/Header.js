import React from "react";

function Header() {
  const styles = {
    container: {
      color: "#FFFFFF",
      backgroundColor: "#1E8CE5",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-around",
    },
    title: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "start",
    },
    details: {
      display: "flex",
      flexDirection: "column",
      alignItems: "start",
      paddingBottom: "1rem",
    },
    small: {
      fontWeight: "600",
    },
    button: {
      backgroundColor: "#1E8CE5",
      color: "#FFFFFF",
      border: "2px solid #FFFFFF",
      padding: "0.6rem 3.5rem",
      fontWeight: "600",
    },
  };

  return (
    <div style={styles.container}>
      <div className="title">
        <h1>Analyse du PC nécessaire</h1>
        <div className="details" style={styles.details}>
          <div>
            <span style={styles.small}>Espace à nettoyer:</span>{" "}
            <span>A déterminer par analyse</span>
          </div>
          <div>
            <span style={styles.small}>Dernière analyse:</span>{" "}
            <span>08/06/2021</span>
          </div>
          <div>
            <span style={styles.small}>Dernière MAJ:</span>{" "}
            <span>08/06/2021</span>
          </div>
        </div>
      </div>
      <div className="btn">
        <button type="submit" style={styles.button}>
          ANALYSER
        </button>
      </div>
    </div>
  );
}

export default Header;
