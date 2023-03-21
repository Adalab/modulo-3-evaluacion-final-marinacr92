import '../styles/App.scss';
import logoHP from '../images/logoHP.png';
import { useEffect, useState } from 'react';
import callToApi from '../services/api';

function App() {
  return (
    <>
      <header>
        <div>
          <img src={logoHP} alt="Logo de Harry Potter" />
        </div>
      </header>
      <main>
        <section>
          <form action="">
            <label htmlFor="">Filtrar por nombre</label>
            <input type="text" />
            <label htmlFor="">Filtrar por casa</label>
            <select name="" id="">
              <option value="gryffindor">Gryffindor</option>
              <option value="hufflepuff">Hufflepuff</option>
              <option value="ravenclaw">Ravenclaw</option>
              <option value="slytherin">Slytherin</option>
            </select>
          </form>
        </section>
        <section>
          <ul>
            <li>
              <img src="" alt="" />
              <p>Nombre</p>
              <p>Especie</p>
            </li>
          </ul>
        </section>
      </main>
    </>
  );
}

export default App;
