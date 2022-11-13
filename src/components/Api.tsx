import { useEffect, useState } from "react";
import axios from "axios";
import Card from "react-bootstrap/Card";

type apiProps = {
  json?: any;
  title: string;
  item?: object;
  poster_path: object;
  src: string;
  category: string;
};

export const Api = (props: apiProps) => {
  const [content, setContent] = useState<apiProps[]>([]);
  useEffect(() => {
    axios
      .get(
        `${process.env.REACT_APP_API_URL}${props.category}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
      )
      .then((response) => {
        setContent(response.data.results);
      });
  }, [props.category]);

  return (
    <>
      {content.map((item) => (
        <Card
          style={{ width: "8rem", height: "12rem", backgroundColor: "#131516" }}
        >
          <Card.Img
            variant="top"
            src={`https://image.tmdb.org/t/p/original${item.poster_path}`}
            style={{ width: 80, height: 100, alignSelf: "center" }}
          />
          <Card.Body>
            <Card.Title style={{ fontSize: "14px" }}>{item.title}</Card.Title>
          </Card.Body>
        </Card>
      ))}
    </>
  );
};
