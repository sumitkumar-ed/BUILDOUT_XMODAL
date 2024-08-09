import React, { useState } from "react";
import "./XModal.css";

const XModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    phone: "",
    dob: "",
  });
  const [errors, setErrors] = useState({});

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!formData.username) newErrors.username = "Username is required.";
    if (!formData.email) newErrors.email = "Email address is required.";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      alert("Invalid email. Please check your email address.");
      return;
    }
    if (!formData.phone) newErrors.phone = "Phone number is required.";
    else if (!/^\d{10}$/.test(formData.phone)) {
      alert("Invalid phone number. Please enter a 10-digit phone number.");
      return;
    }
    if (!formData.dob) newErrors.dob = "Date of birth is required.";
    else if (new Date(formData.dob) > new Date()) {
      alert("Invalid date of birth. Date of birth cannot be in the future.");
      return;
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Reset the form and close the modal if there are no errors
    setFormData({ username: "", email: "", phone: "", dob: "" });
    setErrors({});
    onClose();
  };

  return (
    <div className="modal" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2>User Details Modal</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
          {errors.username && <p className="error">{errors.username}</p>}

          <label htmlFor="email">Email Address:</label>
          <input
            type="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          {errors.email && <p className="error">{errors.email}</p>}

          <label htmlFor="phone">Phone Number:</label>
          <input
            type="tel"
            id="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
          {errors.phone && <p className="error">{errors.phone}</p>}

          <label htmlFor="dob">Date Of Birth:</label>
          <input
            type="date"
            id="dob"
            value={formData.dob}
            onChange={handleChange}
            required
          />
          {errors.dob && <p className="error">{errors.dob}</p>}

          <button type="submit" className="submit-button">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default XModal;
