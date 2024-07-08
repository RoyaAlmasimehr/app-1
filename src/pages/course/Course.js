import "./Course.css";
import MyNavbar from "../../components/navbar/Navbar";
import { useParams } from "react-router-dom";
import { courseData } from "../../data";
import { Container ,Row ,Col } from "react-bootstrap";
function Course() {
  const courseId = useParams().courseId;
  const courseInfo = courseData.find((course) => course.id == courseId);
  console.log(courseInfo);

  return (
    <div>
      <MyNavbar />
      <Container>
        <Row className="align-items-center">
          <Col md={5} >
            <img src={courseInfo.img} />
          </Col>
          <Col md={7} className="my-3">
            <h2 style={{ fontFamily: "Lalezar" }}>{courseInfo.title}</h2>
            <p>{courseInfo.text} </p>
            <p style={{textAlign:"justify"}}> {courseInfo.desc}</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Course;
