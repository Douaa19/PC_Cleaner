import React from "react";

function Footer() {
  const styles = {
    container: {
    },
    text: {
      display: "flex",
      alignItems: "start",
      justifyContent: "center",
      flexDirection: "column",
      padding: "1rem 0 4rem 4rem",
      fontWeight: "500",
      fontSize: "16px"
    },
  };

  return (
    <div className="container" style={styles.container}>
      <div style={styles.text}>
        <span>
          PC-CLEANER est un logiciel made in France qui respecte votre vie
          privée.
        </span>
        <span>C'est gratuit est ça le restera</span>
      </div>
    </div>
  );
}

export default Footer;
