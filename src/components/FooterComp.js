function FooterComp() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">             
            <div className="col-4 offset-1 col-sm-2">
              <h5>Links</h5>
              <ul className="list-unstyled">
                <li><a href="#">Home</a></li>
                <li><a href="./aboutus.html">About</a></li>
                <li><a href="#">Menu</a></li>
                <li><a href="./contactus.html">Contact</a></li>
              </ul>
            </div>
          </div>
           <div className="row justify-content-center">             
                <div className="col-auto">
                    <p>© Copyright 2022 Destinos</p>
                </div>
           </div>
        </div>
    </footer>
  );
}

export default FooterComp;