import "../styles/footer.css";
export function Footer() {
  return (
    <>
      <footer className="bg-primary text-white text-center text-lg-start">
        <div className="container p-4">
          <div className="row">
            <div className="col-lg-9 col-md-12 mb-4 mb-md-0">
              <h5 className="text-uppercase">Footer Content</h5>

              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste
                atque ea quis molestias. Fugiat pariatur maxime quis culpa
                corporis vitae repudiandae aliquam voluptatem veniam, est atque
                cumque eum delectus sint!
              </p>
            </div>

            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
              <h5 className="text-uppercase mb-0">Contact</h5>

              <ul className="list-unstyled">
                <li>
                  <a href="#!" className="text-white">
                    <i className="bi bi-facebook"></i> Facebok
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-white">
                    <i className="bi bi-twitter"></i> Twitter
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-white">
                    <i className="bi bi-instagram"></i> Instagram
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="text-center p-3 foot">
          © 2024 Copyright:
          <a className="text-white" href="">
            Mohamed Sabry Abuhatab
          </a>
        </div>
      </footer>
    </>
  );
}
