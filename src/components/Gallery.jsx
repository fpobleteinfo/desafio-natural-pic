import React, { useContext } from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { ApiContext } from "../context/ApiContext";
import IconHeart from "./IconHeart"

const Gallery = () => {
  const { data, setData } = useContext(ApiContext);

//FUNCION PARA CAMBIAR TRUE O FALSE DEL BOOLEAN "liked"...
const addLike = (id) => {
  const newData = data.map((e) =>{
    //console.log(e.id)
    if(e.id === id)
    {
      return{
        ... e,
        liked: !e.liked
      } 
    }
    return e
  })
  setData(newData)
}

  return (
    <>

      <Row className="gallery grid-columns-5 p-3">
        {data.map((c) => (
          <Col key={c.id}
               onClick={() => addLike(c.id)}
              >
            <Card>

            <div className="position-absolute top-0 end-0 p-2 text-light">
                <IconHeart filled={c.liked} />
              </div>

              <Card.Img
                variant="top"
                src={c.src.medium}
                className="card-img"
              />
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

export default Gallery;
