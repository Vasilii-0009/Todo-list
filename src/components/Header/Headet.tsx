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
            <li>
              <a href="/" className="nav-link">
                Список дел
              </a>
            </li>
            <li>
              <a href="/" className="nav-link">
                Информация
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};
