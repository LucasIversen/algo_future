import React, { useEffect, useState } from "react";

interface ResultProps {
  name: string;
  answerString: string;
}

const ResultFriends = (props: ResultProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);
  const [hasMutated, setHasMutated] = useState(false);
  const [randomNumber, setRandomNumber] = useState(() =>
    Math.floor(Math.random() * 100)
  );

  useEffect(() => {
    const getFriends = async () => {
      try {
        const res = await fetch(
          "https://algo-future.vercel.app/api/getFriends"
        );
        const data = await res.json();
        setData(data);
        setIsLoading(false);
      } catch (e) {
        console.error(e);
        setError("ERROR");
        setIsLoading(false);
      }
    };
    if (data === null) {
      getFriends();
    }
  }, []);

  useEffect(() => {
    if (props.answerString && !hasMutated) {
      setHasMutated(true);
      const requestOptions = {
        method: "PUT",
        body: JSON.stringify({
          name: props.name,
          answer_string: props.answerString,
        }),
      };
      fetch("https://algo-future.vercel.app/api/addFriend", requestOptions)
        .then((response) => response.json())
        .then((data) => console.log(data));
    }
  }, [hasMutated]);

  const getFriend = () => {
    if (data.length === 0) {
      return <div>Der er ikke nogle tilgængelige svar</div>;
    }

    const friends = data
      .filter((friend: any) => friend?.name !== props.name)
      .filter((friend: any) => friend?.answerString === props.answerString);

    if (friends.length === 0) {
      const random = randomNumber % data.length;
      return <h1 style={styles.job}>{data[random].name}</h1>;
    } else {
      const random = randomNumber % friends.length;
      return <h1 style={styles.job}>{friends[random].name}</h1>;
    }
  };

  return (
    <div className="result_container" style={styles.container}>
      <h1 style={styles.subHeader}>Din fremtidige bedste ven er:</h1>
      {error !== null ? (
        <div>Error: {error}</div>
      ) : isLoading !== false ? (
        <div>Loading...</div>
      ) : (
        getFriend()
      )}
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

export default ResultFriends;
