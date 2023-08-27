import "./Header.css";
import { Link } from "react-router-dom";
export const Header = () => {
  return (
    <>
      <nav className="nav">
        <div className="nav-wrapper">
          <a href="/" className="brand-logo">
            Todo-list
          </a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>
              <Link className="nav-link" to="/">
                Список дел
              </Link>
            </li>
            <li>
              <Link className="nav-link" to="/aboute">
                Информация
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};
