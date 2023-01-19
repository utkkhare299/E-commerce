import {useContext} from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { CartContext } from "../context/CartContext";

function Album({album}) {

  const { addItem} = useContext(CartContext)

  const onAdd = (e) => {
    addItem(album, album.quantity)
  }
  return (
    <div>
      <Card.Title>{album.title}</Card.Title>
      <Card style={{ width: "18rem", marginBottom: "2rem" }}>
        <Card.Img variant="top" src={album.imageUrl} />
        <Card.Body>
          <Card.Text>${album.price}</Card.Text>
          <Button variant="info" onClick={onAdd}>Add to Cart</Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Album;
