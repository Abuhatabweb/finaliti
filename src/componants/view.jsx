import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "../styles/view.css"

export function View({ products }) {
  let { id } = useParams();

  let [product, setProduct] = useState({});
  useEffect(() => {
    setProduct(products.find((product) => product.id == id));
  }, []);

  return (
    <>
      <div className="container view">
        <div className="container row">
        <div className="col-lg-5">
            <img src={product.src} alt="" />
          </div>
          <div className="col-lg-7">
          <h3>Product Code : {id}</h3>
          <p className="lead mt-3">Product Name : {product.productName}</p>
          <p className="lead mt-3">Product Price :{product.productPrice}</p>
          <p className="lead mt-3">Product Quantity : {product.productQuantity}</p>
          <p className="lead mt-3">Product Description : {product.productDes}</p>
          </div>
          
          

          <Link to="/products" className="btn btn-success">
            Back
          </Link>
        </div>
      </div>
    </>
  );
}
