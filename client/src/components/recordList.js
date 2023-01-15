import React, { useEffect, useState } from "react";

// Create a component to show client input in a single record
const Record = (props) => (
  <tr>
    <td>{props.record.firstName}</td>
    <td>{props.record.lastName}</td>
    <td>{props.record.email}</td>
    <td>{props.record.gender}</td>
  </tr>
);

// Create the main component for displaying the records
export default function RecordList() {
  // Initialize state to store the records
  const [records, setRecords] = useState([]);

  // This fetches the records from the server
  useEffect(() => {
    async function getRecords() {
      const response = await fetch(`http://localhost:5001/record/`);

      // If there is an error show a message
      if (!response.ok) {
        const message = `An error occurred: ${response.statusText}`;
        window.alert(message);
        return;
      }

      const records = await response.json();
      setRecords(records);
    }

    getRecords();

    return;
  }, [records.length]);

  // This function will map out the records on the table
  function recordList() {
    return records.map((record) => {
      return <Record record={record} key={record._id} />;
    });
  }

  // This section will display the table with the records of employees
  return (
    <div className="central-div">
      <h3>Employee List</h3>
      <table className="table table-hover" style={{ marginTop: 20 }}>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Gender</th>
          </tr>
        </thead>
        <tbody>{recordList()}</tbody>
      </table>
    </div>
  );
}
