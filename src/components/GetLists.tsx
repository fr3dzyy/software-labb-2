import { useEffect, useState } from "react";
import axios from "axios";
import Card from "react-bootstrap/Card";

type listProps = {
  poster_path: string;
  title: string;
  item: object;
  category: string;
};

export const GetLists = (props: listProps) => {
  const [listContent, setListContent] = useState<listProps[]>([]);
  useEffect(() => {
    axios
      .get(
        `${process.env.REACT_APP_API_URL_LISTS}${props.category}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
      )
      .then((response) => {
        setListContent(response.data.items);
      });
  }, [props.category]);

  return (
    <>
      {listContent.map((item) => (
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
