import { Container, Row, Col } from "react-bootstrap";
import MyNavbar from "../../components/navbar/Navbar";
import "./Home.css";
import animatedImage from "../../assets/images/animated.svg";
import CourseItem from "../../components/course/CourseItem";
import { useState } from "react";
import Footer from "../../components/footer/Footer";
import {courseData} from "../../data";

function Home() {
  const [courses, setCourses] = useState(courseData);

  return (
    <div>
      <MyNavbar />
      <Container fluid="md">
        <Row className="my-5 align-items-center">
          <Col lg="6">
            <h1>چشم‌انداز اینورس</h1>
            <p style={{ textAlign: "justify" }}>
              هدف ما طراحی فضایی است که در آن هر کسی، در هر نقطه‌ای به آموزشی
              کم‌هزینه، مطابق استانداردهای بین‌المللی و نیازهای بازار کار دسترسی
              داشته باشد. تا به امروز چندی از هنرجویان اینورس، در سطح بین‌المللی
              فعالیت حرفه‌ای داشته‌اند. چشم‌انداز اینورس برای آینده این است که
              این سیستم را گسترش داده، در ایران و خارج از ایران بازارسازی کرده و
              به بازار بین‌المللی نیز ورود کنیم.
            </p>
          </Col>
          <Col lg="6" className="py-4">
            <img src={animatedImage} className="img-fluid" />
          </Col>
        </Row>

        <Row className="my-5">
          <h2 className="py-4">دوره های آموزشی</h2>
          {courses.map((course) => (
            <Col key={course.id} className="py-3" md={6} lg={4} xl={3}>
              <CourseItem {...course} />
            </Col>
          ))}
        </Row>
      </Container>
      <Footer />
    </div>
  );
}

export default Home;
