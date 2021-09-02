import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Movies from './containers/Movies';
import AddMovie from './components/AddMovie';

export default function App() {
  return (
    <>
      <Header />
      <Movies />
      <AddMovie />
      <Footer />
    </>
  );
}
