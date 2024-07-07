import { Container ,Row ,Col } from 'react-bootstrap';
import './Footer.css'
function Footer() {
    return (
      <footer>
        <Container>
          <Row>
            <Col>
              <h3>آموزش با کیفیت، در دسترس همه</h3>

              <p>
                در سال گذشته، نه تنها بیش از ۵۰۰۰ هنرجو خارج از تهران در
                دوره‌های اینورس شرکت کرده‌اند، بلکه هزینه شرکت در دوره‌ها نیز به
                مراتب کمتر شده است
              </p>
            </Col>
            <Col style={{ textAlign: "left",  }}>
              <img style={{height:"145px"}}
                src="https://inverseschool.com/online/assets/images/about/4.png"
                alt=""
                className="img-fluid"
              />
            </Col>
          </Row>
        </Container>
      </footer>
    );
}

export default Footer;