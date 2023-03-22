import logoHP from '../images/logoHP.png';
import '../styles/Header.scss';

const Header = () => {
  return (
    <header className="header">
      <div className="header-img-container">
        <img src={logoHP} alt="Logo de Harry Potter" className="header-img" />
      </div>
    </header>
  );
};

export default Header;
