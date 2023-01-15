import React, { useState } from "react";
import { useNavigate } from "react-router";

// Create component
export default function Create() {
  // Initialize state to store form data
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    level: "",
  });
  // Get navigate function to navigate to different routes
  const navigate = useNavigate();

  // These methods will update the state properties
  function updateForm(value) {
    return setForm((prev) => {
      return { ...prev, ...value };
    });
  }

  // This function will handle the submission
  const onSubmit = async (e) => {
    e.preventDefault();

    // When a post request is sent to the create url, it will add a new record to the database
    const newPerson = { ...form };

    // Send a post request to the server with the form data
    await fetch("http://localhost:5001/record/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPerson),
    }).catch((error) => {
      window.alert(error);
      return;
    });

    // Clear the form and navigate to the record list page
    setForm({ firstName: "", lastName: "", email: "", gender: "" });
    navigate("/record");
  };

  // This section will display the form that takes the input from the user
  return (
    <div className="central-div">
      <h3>Create New Employee</h3>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            className="form-control"
            id="firstName"
            value={form.firstName}
            onChange={(e) => updateForm({ firstName: e.target.value })}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            className="form-control"
            id="lastName"
            value={form.lastName}
            onChange={(e) => updateForm({ lastName: e.target.value })}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            className="form-control"
            id="email"
            value={form.email}
            onChange={(e) => updateForm({ email: e.target.value })}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="gender">Gender</label>
          <br></br>
          <select
            className="dropdown-menubar"
            value={form.gender}
            id="gender"
            onChange={(e) => updateForm({ gender: e.target.value })}
            required
          >
            <option></option>
            <option>Female</option>
            <option>Male</option>
            <option>Other</option>
          </select>
        </div>
        <div className="form-group">
          <input
            type="submit"
            value="Create person"
            className="btn btn-danger"
          />
        </div>
      </form>
    </div>
  );
}
