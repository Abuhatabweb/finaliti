import React, { useState } from "react";
import { FormData } from "./componants/form";
import { Products } from "./componants/products";
import { Slider } from "./componants/slider";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Form,
  Route,
  RouterProvider,
} from "react-router-dom";
import { CommonElements } from "./componants/commonElements";
import { Home } from "./componants/home";
import "bootstrap-icons/font/bootstrap-icons.css";
import { View } from "./componants/view";
import { LogIn } from "./componants/login";

function App() {
  let [userName , setUserName] = useState("")
  let [products, setProducts] = useState([]);
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<CommonElements userName={userName} setUserName = {setUserName}/>}>
          <Route index element={<LogIn userName={userName} setUserName = {setUserName} />} />
          <Route path="/home" element={<Home userName={userName} setUserName = {setUserName} />} />
          <Route
            path="/products"
            element={<Products products={products} setProducts={setProducts} />}
          />
          <Route
            path="/:id/edit"
            element={<FormData products={products} setProducts={setProducts} />}
          />
          <Route path="/:id/view" element={<View products={products} />} />
        </Route>
      </>
    )
  );

  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
