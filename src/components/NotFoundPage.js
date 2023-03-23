import { Link } from 'react-router-dom';
import snitch from '../images/snitch.png';

const NotFoundPage = ({ text }) => {
  return (
    <main className="main-landing">
      <h1 className="page-not-found">{text}</h1>
      <Link to="/" className="btn-back">
        <img src={snitch} className="btn-back-img" alt="" />
        Volver al Gran Salón
      </Link>
    </main>
  );
};

export default NotFoundPage;
