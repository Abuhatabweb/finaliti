import { Link } from "react-router-dom";
import "../styles/hero.css";
import { Slider } from "./slider";

export function Home() {
  return (
    <>
      <Slider />
      <div className="p-5 text-center bg-image hero-sec">
        <div className="mask">
          <div className="d-flex justify-content-center align-items-center h-100">
            <div className="text-white">
              <h1 className="mb-3">Shoply</h1>
              <h4 className="mb-3">Controle Your Product Now</h4>
              <Link
                data-mdb-ripple-init
                className="btn btn-outline-light btn-lg"
                href="#!"
                role="button"
                to="/products"
              >
                Start Now
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="row flex-lg-row-reverse align-items-center g-5 py-5 cont">
        <div className="col-10 col-sm-8 col-lg-6">
          <img
            src="https://cdn.prod.website-files.com/5d27c9116c864d2e3ab8eee3/5d27cac556124e167c4ef347_Love-Local-Post-thumb.jpg"
            className="d-block mx-lg-auto img-fluid"
            alt="Bootstrap Themes"
            width="700"
            height="500"
            loading="lazy"
          />
        </div>
        <div className="col-lg-6">
          <h1 className="display-5 fw-bold lh-1 mb-3">Why Us</h1>
          <p className="lead">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
            dolorum odit perferendis, reprehenderit nisi soluta quia excepturi
            voluptas blanditiis atque, distinctio quam eligendi repudiandae? Aut
            culpa ratione, eligendi natus harum assumenda pariatur similique
            voluptatum cupiditate unde reprehenderit alias recusandae ab facere
            quas nisi ducimus beatae obcaecati vel! Obcaecati, facilis aliquam?
          </p>
        </div>
      </div>
    </>
  );
}
