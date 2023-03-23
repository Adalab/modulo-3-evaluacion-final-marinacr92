import logoHP from '../images/logoHP.png';
import hogwarts from '../images/hogwarts.png';
import '../styles/Header.scss';

const Header = () => {
  return (
    <header className="header">
      <div className="header-img-container">
        <img src={logoHP} alt="Logo de Harry Potter" className="header-img" />
      </div>
      <img src={hogwarts} alt="" className="hogwarts" />
    </header>
  );
};

export default Header;
