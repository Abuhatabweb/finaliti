import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate, useParams, Link } from "react-router-dom";

export function FormData({ products, setProducts }) {
  let { id } = useParams();
  let navigate = useNavigate();

  let [formData, setFormData] = useState({
    src: ``,
    productName: ``,
    productPrice: ``,
    productDes: ``,
    productQuantity: ``,
  });

  useEffect(() => {
    if (id != 0) {
      setFormData(products.find((product) => product.id == id));
    }
  }, []);

  let update = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  let add = (e) => {
    e.preventDefault();
    if (id != 0) {
      let idEdit = products.findIndex((product) => product.id == id);
      products[idEdit] = formData;
      setProducts(products);
    } else {
      let productId = products.length + 1;
      setProducts([...products, { id: productId, ...formData }]);
    }
    navigate("/products");
  };

  return (
    <section className="container p-5 ">
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Image Link</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter"
            name="src"
            onChange={update}
            value={formData.src}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Product Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter"
            name="productName"
            onChange={update}
            value={formData.productName}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Product price</Form.Label>
          <Form.Control
            type="text"
            placeholder="Price"
            name="productPrice"
            onChange={update}
            value={formData.productPrice}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Product Describtion</Form.Label>
          <Form.Control
            type="text"
            placeholder="describtion"
            name="productDes"
            onChange={update}
            value={formData.productDes}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Product Quantity</Form.Label>
          <Form.Control
            type="number"
            placeholder="Quntity"
            name="productQuantity"
            onChange={update}
            value={formData.productQuantity}
          />
        </Form.Group>
        <Link
          className="btn btn-primary"
          variant="primary"
          type="btn"
          onClick={add}
        >
          {id == 0 ? "Add Product" : "Edit Product"}
        </Link>
      </Form>
    </section>
  );
}
