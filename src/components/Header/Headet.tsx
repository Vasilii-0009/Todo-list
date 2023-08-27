import "./Header.css";
export const Header = () => {
  return (
    <>
      <nav className="nav">
        <div className="nav-wrapper">
          <a href="/" className="brand-logo">
            Todo-list
          </a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li className="nav__item">Список дел</li>
            <li className="nav__item">Информация</li>
          </ul>
        </div>
      </nav>
    </>
  );
};
