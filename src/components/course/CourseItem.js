import "./CourseItem.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function CourseItem({title ,img ,text}) {
    return (
      <div>
        <Card>
          <Card.Img variant="top" src={img} />
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>{text}
            </Card.Text>
            <Button variant="primary">خرید دوره</Button>
          </Card.Body>
        </Card>
      </div>
    );
}

export default CourseItem;