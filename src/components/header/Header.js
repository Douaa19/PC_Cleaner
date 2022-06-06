import React, { useState } from "react";
import axios from "axios";
import { Analyse } from "../../services/Analyse";

function Header() {
  const [history, setHistory] = useState("");
  const [resultAnalyse, setResultAnalyse] = useState("");
  // const URL = "http://localhost:8080/history/";

  // get last analyse
  const analyseHistory = (async () => {
    return await axios.get(`${URL}`).then((result) => {
      if (result) {
        return setHistory(result.data.result);
      } else {
        console.log("No analyse found !!");
      }
    });
  })();

  const AnalyseResult = () => {
    // console.log("hello")
    try {
      Analyse().then((res) => {
        if (res.data) setResultAnalyse(res.data.result);
      });
    } catch (error) {
      console.log(error.message);
    }
  };

  const styles = {
    container: {
      color: "#FFFFFF",
      backgroundColor: "#1E8CE5",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-around",
    },
    h1: {
      letterSpacing: "2px",
      paddingTop: "1rem",
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
      cursor: "pointer",
    },
  };

  return (
    <div style={styles.container}>
      <div className="title">
        <h1 style={styles.h1}>Analyse du PC nécessaire</h1>
        <div className="details" style={styles.details}>
          <div>
            <span style={styles.small}>Espace à nettoyer :</span>
            {"  "}
            <span> {history.size}</span>
          </div>
          <div>
            <span style={styles.small}>Dernière analyse :</span>
            {"  "}
            <span> {history.time_at}</span>
          </div>
          <div>
            <span style={styles.small}>Dernière MAJ :</span>
            {"  "}
            <span> 08/06/2021</span>
          </div>
        </div>
      </div>
      <div className="btn">
        <button
          type="submit"
          style={styles.button}
          onClick={() => AnalyseResult()}
        >
          ANALYSER
        </button>
      </div>
    </div>
  );
}

export default Header;
