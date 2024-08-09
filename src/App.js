import React, { useState } from "react";
import XModal from "./components/XModal/XModal";
import Button from "./components/Button/Button";
import './App.css';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <div className="App">
      <header className="App-header">
        <h1>User Details Modal</h1>
        <Button onClick={handleOpenModal}>Open Form</Button>
        <XModal isOpen={isModalOpen} onClose={handleCloseModal} />
      </header>
    </div>
  );
}

export default App;
