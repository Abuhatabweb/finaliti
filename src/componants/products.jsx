import { Link, Navigate, NavLink, useNavigate } from "react-router-dom";
import "../styles/product.css";
import { Card, ListGroup } from "react-bootstrap";

export function Products({ products, setProducts }) {
  let navigate = useNavigate();
  let del = (id) => {
    let filtered = products.filter((product) => product.id != id);
    setProducts(filtered);
  };
  let cards = products.map((product) => {
    return (
        <Card style={{ width: "18rem" }} key={product.id}>
          <Card.Img variant="top" src={product.src} />
          <Card.Body>
            <Card.Title> {`${product.productName}`} </Card.Title>
            <Card.Text>{`${product.productDes}`}</Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroup.Item>
              {product.productQuantity > 0
                ? `Amount Avilable:${product.productQuantity}`
                : `Not Avilable`}
            </ListGroup.Item>
            <ListGroup.Item>{`price:${product.productPrice}`}</ListGroup.Item>
          </ListGroup>
          <Card.Body>
            <a
              href="#"
              className={`btn btn-primary ${
                product.productQuantity == 0
                  ? `bg-danger`
                  : product.productQuantity == 1
                  ? `bg-warning`
                  : `bg-success`
              }`}
            >
              {product.productQuantity == 0
                ? `Not avilabil`
                : product.productQuantity == 1
                ? `Catch Now`
                : `Buy Now`}
            </a>
            <i
              className="bi bi-pencil-square edit"
              onClick={() => {
                navigate(`/${product.id}/edit`);
              }}
            ></i>
            <i
              className="bi bi-eye-fill see"
              onClick={() => {
                navigate(`/${product.id}/view`);
              }}
            ></i>
            <i
              className="bi bi-trash del"
              onClick={() => {
                del(product.id);
              }}
            ></i>
          </Card.Body>
        </Card>
    );
  });

  return (

    <div className="container con-pos">
      <h1 className="text-center mt-4 text-secondary">Your Products</h1>
      <NavLink to="/0/edit">
        <i className="bi bi-plus-square-fill btn"></i>
      </NavLink>
      <div className="container row gap-5">{cards}</div>
    </div>
  );
}
