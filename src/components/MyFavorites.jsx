import React, { useContext } from "react";
import { ApiContext } from "../context/ApiContext";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import IconHeart from "../components/IconHeart";

const MyFavorites = () => {
  const { data } = useContext(ApiContext);

  //filtro por liked con valor
  const likedData = data.filter((c) => c.liked);

  return (
    <>

      <Row className="gallery grid-columns-5 p-3">
        {likedData.map((c) => (
          <Col key={c.id} >
            <Card>
              <div className="position-absolute top-0 end-0 p-2 text-light">
                <IconHeart filled={c.liked} />
              </div>

              <Card.Img variant="top" src={c.src.medium} className="card-img" />
              <div className="position-absolute bottom-0 start-0 p-2 text-light alt-photo">
                {c.alt}
              </div>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
};
export default MyFavorites;