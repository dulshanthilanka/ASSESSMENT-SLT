import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Home() {
  const [data, setData] = useState([]);

  const [id, setId] = useState('');
  const [address, setAddress] = useState('');
  const [age, setAge] = useState('');
  const [experience, setExperience] = useState('');
  const [file, setFile] = useState('');
  const [gender, setGender] = useState('');
  const [marriedStatus, setMarriedStatus] = useState('');
  const [name, setName] = useState('');
  const [nationality, setNationality] = useState('');
  const [province, setProvince] = useState('');

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:8080/home");
      setData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    axios.post("http://localhost:8080/home", {
      address,
      age: parseInt(age, 10),
      experience: parseInt(experience, 10),
      file:null,
      gender,
      id: parseInt(id, 10),
      marriedStatus,
      name,
      nationality,
      province,
    })
      .then((result) => {
        console.log(result);
        setData([...data, {
            address,
            age,
            experience,
            file:null,
            gender,
            id: parseInt(id, 10),
            marriedStatus,
            name,
            nationality,
            province,
        }]);
        setId("");
        setAddress("");
        setAge("");
        setExperience("");
        setFile(null);
        setGender("");
        setMarriedStatus("");
        setName("");
        setNationality("");
        setProvince("");
      })
      .catch((err) => console.log(err));
  };

  const onDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/home/${id}`);
      setData(data.filter((item) => item.id !== id));
    } catch (error) {
      console.error("Error deleting item:", error);
    }
  };

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Home</title>
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
              flex-direction: column;
            }
            .table_div {
              margin-top: 20px;
              width: 90%;
              display: flex;
              justify-content: center;
            }
            .table_div table {
              width: 100%;
              margin-left: 19%;
            }
          `}
        </style>
      </Helmet>
      <div className="container">
      <form onSubmit={handleSubmit}>
      <div className="row">
        <div className="form-group col-md-6">
          <label htmlFor="inputId4">ID</label>
          <input
            type="text"
            className="form-control"
            id="inputId4"
            placeholder="ID"
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
        </div>
        <div className="form-group col-md-6">
          <label htmlFor="inputName4">NAME</label>
          <input
            type="text"
            className="form-control"
            id="inputName4"
            placeholder="NAME"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-group col-md-6">
          <label htmlFor="inputAge4">AGE</label>
          <input
            type="number"
            className="form-control"
            id="inputAge4"
            placeholder="AGE"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </div>
        <div className="form-group col-md-6">
          <label htmlFor="inputAddress4">ADDRESS</label>
          <input
            type="text"
            className="form-control"
            id="inputAddress4"
            placeholder="ADDRESS"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        <div className="form-group col-md-6">
          <label htmlFor="inputExperience4">EXPERIENCE</label>
          <input
            type="text"
            className="form-control"
            id="inputExperience4"
            placeholder="EXPERIENCE"
            value={experience}
            onChange={(e) => setExperience(e.target.value)}
          />
        </div>
        <div className="form-group col-md-6">
          <label htmlFor="inputProvince4">PROVINCE</label>
          <select
            className="form-control"
            id="inputProvince4"
            value={province}
            onChange={(e) => setProvince(e.target.value)}
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
            placeholder="NATIONALITY"
            value={nationality}
            onChange={(e) => setNationality(e.target.value)}
          />
        </div>
        <div className="form-group col-md-6">
          <label htmlFor="inputGender4">GENDER</label>
          <input
            type="text"
            className="form-control"
            id="inputGender4"
            placeholder="GENDER"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          />
        </div>
        <div className="form-group col-md-6">
          <label htmlFor="inputMarriedStatus4">MARRIED STATUS</label>
          <input
            type="text"
            className="form-control"
            id="inputMarriedStatus4"
            placeholder="MARRIED STATUS"
            value={marriedStatus}
            onChange={(e) => setMarriedStatus(e.target.value)}
          />
        </div>
        <div className="form-group col-md-6">
          <label htmlFor="inputFile4">FILE</label>
          <br/>
          <input
            type="file"
            className="form-control-file btn btn-success"
            id="inputFile4"
            onChange={(e) => setFile(e.target.files[0])}
          />
        </div>
      </div>
      <button type="submit" className="btn btn-primary">
        CREATE
      </button>
    </form>
      </div>
      <div className="table_div">
        <table className="table table-bordered table-lg">
          <thead>
            <tr>
              <th scope="col" className="col-1">
                ID
              </th>
              <th scope="col" className="col-3">
                Name
              </th>
              <th scope="col" className="col-1">
                AGE
              </th>
              <th scope="col" className="col-3">
                MARRIED STATUS
              </th>
              <th scope="col" className="col-2">
                FILE
              </th>
              <th scope="col" className="col-2">
                ADDRESS
              </th>
              <th scope="col" className="col-2">
                EXPERIENCE
              </th>
              <th scope="col" className="col-2">
                GENDER
              </th>
              <th scope="col" className="col-2">
                PROVINCE
              </th>
              <th scope="col" className="col-2">
                NATIONALITY
              </th>
            
              <th scope="col" className="col-2">FUNCTION</th>
            </tr>
          </thead>
          <tbody>
              {data.map((item, index) => (
                <tr key={index}>
                  <td className="align-middle">{item.id}</td>
                  <td className="align-middle">{item.name}</td>
                  <td className="align-middle">{item.age}</td>
                  <td className="align-middle">{item.marriedStatus}</td>
                  <td className="align-middle">
                    <img src={item.file} width="50px" height="50px" />
                  </td>
                  <td className="align-middle">{item.address}</td>
                  <td className="align-middle">{item.experience}</td>
                  <td className="align-middle">{item.gender}</td>
                  <td className="align-middle">{item.province}</td>
                  <td className="align-middle">{item.nationality}</td>
                  <td className="text-center align-middle">
                    <button className="btn btn-danger" onClick={() => onDelete(item.autoid)}>
                      DELETE
                    </button>
                    <Link to={`/index/${item.autoid}`}>
                      <button className="btn btn-success">UPDATE</button>
                    </Link>
                  </td>
                </tr>
  ))}
</tbody>


        </table>
      </div>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
      <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js"></script>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.min.js"></script>
    </>
  );
}
