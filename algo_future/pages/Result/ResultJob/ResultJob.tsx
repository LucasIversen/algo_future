import React from "react";

interface ResultProps {
  answers: string[];
  answerString: string;
}

const ResultJob = (props: ResultProps) => {
  const getJob = () => {
    switch (props.answerString) {
      case "ab": {
        return <h2 style={styles.job}>Pilot</h2>;
      }
      case "ac": {
        return <h2 style={styles.job}>Læge</h2>;
      }
      case "ad": {
        return <h2 style={styles.job}>Dyrelæge</h2>;
      }
      case "ba": {
        return <h2 style={styles.job}>Togfører</h2>;
      }
      case "bc": {
        return <h2 style={styles.job}>Politi</h2>;
      }
      case "bd": {
        return <h2 style={styles.job}>Brandmand</h2>;
      }
      case "ca": {
        return <h2 style={styles.job}>Astronaut</h2>;
      }
      case "cb": {
        return <h2 style={styles.job}>Skuespiller</h2>;
      }
      case "cd": {
        return <h2 style={styles.job}>Musiker</h2>;
      }
      case "da": {
        return <h2 style={styles.job}>Arkitekt</h2>;
      }
      case "db": {
        return <h2 style={styles.job}>Ingeniør</h2>;
      }
      case "dc": {
        return <h2 style={styles.job}>Kok</h2>;
      }
      default: {
        return <h2 style={styles.job}>Fodboldspiller</h2>;
      }
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.subHeader}>Dit fremtidige job bliver...</h1>
      {getJob()}
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column" as "column",
  },
  subHeader: {
    color: "#fff",
    fontSize: "36px",
    fontWeight: "bold",
    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
    marginBottom: "20px",
  },
  job: {
    color: "#fff",
    fontSize: "36px",
    fontWeight: "bold",
    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
  },
};

export default ResultJob;
