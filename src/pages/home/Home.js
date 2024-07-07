import { Container, Row, Col } from "react-bootstrap";
import MyNavbar from "../../components/navbar/Navbar";
import "./Home.css";
import animatedImage from "../../assets/images/animated.svg";
import CourseItem from "../../components/course/CourseItem";
import { useState } from "react";
import Footer from "../../components/footer/Footer";

function Home() {

const [courses, setCourses] = useState([
  {
    id: 1,
    title: "Character  Design",
    text: " خلق شخصیتی  که ویژگی‌های ظاهری و روحی_روانی او به شکل مطلوبی در خدمت روایت است. ",
    img: "https://inverseschool.com/online/assets/course/2024/02/19/image65d36718a74d9.png",
  },
  {
    id: 2,
    title: "تاریخ طراحی گرافیک  جهان",
    text: "  از دوران اولیه و اولین نشانه‌های تصویری بشر شروع می‌کنیم و به اختراع چاپ می‌رسیم",
    img: "https://inverseschool.com/online/assets/course/2024/02/19/image65d32a7d76b62.png",
  },
  {
    id: 3,
    title: "دوره مدلسازی با نرم افزار Maya",
    text: "مدلساز و یک حجم خام و ساده‌ را تبدیل به یک حجم خاص می‌کنن ",
    img: "https://inverseschool.com/online/assets/course/2023/06/13/image648843615d72c.jpg",
  },
  {
    id: 4,
    title: "طراحی پراپ برای استاپ موشن",
    text: "به تمام اجزایی که در صحنه وجود دارند، از جمله کاراکتر، بک‌گراند و دکور گفته می‌شود",
    img: "https://inverseschool.com/online/assets/course/2022/11/26/image6381e92fcb6eb.png",
  },
]);

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
