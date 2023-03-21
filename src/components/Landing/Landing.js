import Form from './Form';
import CharacterList from './CharacterList';
import { useEffect, useState } from 'react';
import callToApi from '../../services/api';

const Landing = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    callToApi().then((info) => {
      console.log(info);
      setData(info);
    });
  }, []);

  return (
    <main>
      <section>
        <Form></Form>
      </section>
      <section>
        <CharacterList data={data}></CharacterList>
      </section>
    </main>
  );
};

export default Landing;
