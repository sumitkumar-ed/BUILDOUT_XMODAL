import React, { useState } from "react";
import XModal from "../../components/XModal";
import Button from "../../components/Button";
import "./Home.css";

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <div className="home">
      <Button onClick={handleOpenModal}>Open Form</Button>
      <XModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </div>
  );
};

export default Home;
