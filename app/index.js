import React, { useEffect, useState } from "react";
import axios from "axios";

export default function PersonList() {
  const [persons, setPersons] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:8080/courses").then((res) => {
      const data = res.data;
      console.log(data);
      setPersons(data);
    });
  }, [setPersons]);
  return (
    <ul>
      {persons.map((person) => (
        <li key={person.CourseID}>{person.Name + " " + person.Code}</li>
      ))}
    </ul>
  );
}
