import React, { useEffect, useState } from "react";
import axios from "axios";

export default function PersonList() {
  const [persons, setPersons] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8080/students")
      .then((res) => setPersons(res.data));
  }, [setPersons]);
  return (
    <ul>
      {persons.map((person) => (
        <li key={person.CourseID}>{person.Name + " " + person.Code}</li>
      ))}
    </ul>
  );
}
