import "./Header.css";
export const Header = () => {
  return (
    <>
      <nav className="nav">
        <div className="nav-wrapper">
          <div className="brand-logo">Todo-list</div>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li className="nav__item">Список дел</li>
            <li className="nav__item">Информация</li>
          </ul>
        </div>
      </nav>
    </>
  );
};
