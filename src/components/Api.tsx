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
  const selectedMovies = content.slice(1,6)

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
      {selectedMovies.map((item) => (
        <Card
          style={{ width: 350, height: 350, backgroundColor: "#131516" }}
        >
          <Card.Img
            variant="top"
            src={`https://image.tmdb.org/t/p/original${item.poster_path}`}
          />
          <Card.Body>
            <Card.Title >{item.title}</Card.Title>
          </Card.Body>
        </Card>
      ))}
    </>
  );
};
