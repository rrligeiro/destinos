import Container from "react-bootstrap/Container";

function FooterComp() {
  return (
    <footer className="footer">
      <Container>
           <div className="row justify-content-center">             
                <div className="col-auto">
                    <p>© Copyright 2022 Destinos</p>
                </div>
           </div>
        </Container>
    </footer>
  );
}

export default FooterComp;