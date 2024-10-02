import { Outlet } from "react-router-dom";
import { FormData } from "./form";
import { Header } from "./header";
import { Footer } from "./footer";

export function CommonElements({userName , setUserName}) {
  return (
    <>
      <Header userName={userName} setUserName = {setUserName}/>
      <Outlet />
      <Footer />
    </>
  );
}
