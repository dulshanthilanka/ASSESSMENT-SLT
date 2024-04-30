import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

export default function Index() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [name, setUpdateName] = useState('');
    const [age, setUpdateAge] = useState('');
    const [address, setUpdateAddress] = useState('');
    const [experience, setUpdateExperience] = useState('');
    const [province, setUpdateProvince] = useState('');
    const [nationality, setUpdateNationality] = useState('');
    const [gender, setUpdateGender] = useState('');
    const [marriedStatus, setUpdateMarriedStatus] = useState('');
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        await axios.put(`http://localhost:8080/home/${id}`, {
          address,
          age: parseInt(age, 10),
          experience: parseInt(experience, 10),
          gender,
          id: parseInt(id, 10),
          marriedStatus,
          name,
          nationality,
          province,
        });
      } catch (error) {
        console.error("Error updating data:", error);
      }
      navigate('/home');
    };

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>INDEX</title>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
          integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH"
          crossOrigin="anonymous"
        />
        <style>
          {`
            .form-group {
              margin-bottom: 1.5rem;
            }
            .container {
              height: 100vh;
              display: flex;
              justify-content: center;
              align-items: center;
            }
            .btn.btn-primary {
              margin: 10px;
              padding: 10px;
            }
          `}
        </style>
      </Helmet>
      <div className="container">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="form-group col-md-6">
              <label htmlFor="inputName4">NAME</label>
              <input
                type="text"
                className="form-control"
                id="inputName4"
                name="name"
                placeholder="NAME"
                onChange={(e) => setUpdateName(e.target.value)}
              />
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="inputAge4">AGE</label>
              <input
                type="number"
                className="form-control"
                id="inputAge4"
                name="age"
                placeholder="AGE"
                onChange={(e) => setUpdateAge(e.target.value)}
              />
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="inputAddress4">ADDRESS</label>
              <input
                type="text"
                className="form-control"
                id="inputAddress4"
                name="address"
                placeholder="ADDRESS"
                onChange={(e) => setUpdateAddress(e.target.value)}
              />
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="inputExperience4">EXPERIENCE</label>
              <input
                type="text"
                className="form-control"
                id="inputExperience4"
                name="experience"
                placeholder="EXPERIENCE"
                onChange={(e) => setUpdateExperience(e.target.value)}
              />
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="inputProvince4">PROVINCE</label>
              <select
                className="form-control"
                id="inputProvince4"
                name="province"
                onChange={(e) => setUpdateProvince(e.target.value)}
              >
                <option value="">Select Province</option>
                <option value="Anuradhapura">Anuradhapura</option>
                <option value="Colombo">Colombo</option>
                <option value="Kurunegala">Kurunegala</option>
                <option value="Kandy">Kandy</option>
                <option value="Jaffna">Jaffna</option>
                <option value="Galle">Galle</option>
                <option value="Badulla">Badulla</option>
                <option value="Trincomalee">Trincomalee</option>
              </select>
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="inputNationality4">NATIONALITY</label>
              <input
                type="text"
                className="form-control"
                id="inputNationality4"
                name="nationality"
                placeholder="NATIONALITY"
                onChange={(e) => setUpdateNationality(e.target.value)}
              />
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="inputGender4">GENDER</label>
              <input
                type="text"
                className="form-control"
                id="inputGender4"
                name="gender"
                placeholder="GENDER"
                onChange={(e) => setUpdateGender(e.target.value)}
              />
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="inputMarriedStatus4">MARRIED STATUS</label>
              <input
                type="text"
                className="form-control"
                id="inputMarriedStatus4"
                name="marriedStatus"
                placeholder="MARRIED STATUS"
                onChange={(e) => setUpdateMarriedStatus(e.target.value)}
              />
            </div>
          </div>
          <button type="submit" className="btn btn-primary">
            UPDATE
          </button>
        </form>
      </div>
      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz"
        crossOrigin="anonymous"
      ></script>
      <script
        src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js"
        integrity="sha384-I7E8VVD/ismYTF4hNIPjVp/Zjvgyol6VFvRkX/vR+Vc4jQkC+hVqc2pM8ODewa9r"
        crossOrigin="anonymous"
      ></script>
      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.min.js"
        integrity="sha384-0pUGZvbkm6XF6gxjEnlmuGrJXVbNuzT9qBBavbLwCsOGabYfZo0T0to5eqruptLy"
        crossOrigin="anonymous"
      ></script>
    </>
  );
}
