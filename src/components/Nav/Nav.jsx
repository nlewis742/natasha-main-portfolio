import './Nav.css';

function Nav(props) {
    // if we need logic to determine what to render, we put it here

  return (
    <div className="nav">
      <div className="nav__logo">
        <img src="" alt="logo" />
        <h1>{props.data}</h1>
      </div>
      <div className="nav__links">
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </div>
    </div>
  );
}

export default Nav;