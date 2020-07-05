import React from 'react';
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import { ModalProvider } from "./components/Modal/modalContext";

function App() {
  return (
    <>
      <Header />
      <ModalProvider>
        <Main />
      </ModalProvider>
      <Footer />
    </>
  );
}

export default App;
