import "./Article.css";
import MyNavbar from "../../components/navbar/Navbar";
import { Link, Outlet, Route, Routes } from "react-router-dom";
function  Article() {
    return (
      <div className="articleWrapper">
        <MyNavbar />
        <h1>صفحه مقالات</h1>
        <hr />
        <div className="btnContainer">
          <Link to="Early history" className="linkBtn">
            Early history
          </Link>
          <Link to="Walt Disney" className="linkBtn">
            Walt Disney
          </Link>
          <Link to="Termite Terrace" className="linkBtn">
            Termite Terrace
          </Link>
        </div>
        <hr />
       <Outlet />
      </div>
    );
}

export default Article;