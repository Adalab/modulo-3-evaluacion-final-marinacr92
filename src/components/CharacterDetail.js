import { Link } from 'react-router-dom';

const CharacterDetail = ({ data }) => {
  return (
    <main>
      <Link to="/">Volver</Link>
      <article>
        <img src="" alt="" />
        <p>Nombre</p>
        <p>Casa</p>
        <p>Si vivo o muerto</p>
        <p>Género</p>
        <p>Especie</p>
        <p>Nombres alternativos</p>
      </article>
    </main>
  );
};

export default CharacterDetail;
