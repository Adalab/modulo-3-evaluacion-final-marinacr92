import '../styles/App.scss';
import Header from './Header';

import { useEffect, useState } from 'react';
import callToApi from '../services/api';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Header></Header>
    </>
  );
}

export default App;
