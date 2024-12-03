import React, { useState } from "react";
import "./GalaxyApp.css";

const GalaxyApp = () => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    pictureUrl: "",
  });

  const [galaxies, setGalaxies] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, description, pictureUrl } = formData;
    setGalaxies([...galaxies, { name, description, pictureUrl }]);
    setFormData({ name: "", description: "", pictureUrl: "" });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>Add a New Galaxy</h2>
        <label htmlFor="name">Galaxy Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          required
        />

        <label htmlFor="pictureUrl">Picture URL</label>
        <input
          type="url"
          id="pictureUrl"
          name="pictureUrl"
          value={formData.pictureUrl}
          onChange={handleChange}
          required
        />

        <button type="submit">Add Galaxy</button>
      </form>

      <ul>
        {galaxies.map((galaxy, index) => (
          <li key={index}>
            <h3>{galaxy.name}</h3>
            <p>{galaxy.description}</p>
            <img
              className="preview"
              src={galaxy.pictureUrl}
              alt={galaxy.name}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GalaxyApp;
