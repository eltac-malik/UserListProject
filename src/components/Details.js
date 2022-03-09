import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";

function Details() {
  const [usr, setUsr] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`https://randomuser.me/api/?results=10/${id}`)
      .then((resp) => setUsr(resp.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div
      style={{
        textAlign: "left",
        maxWidth: "1200px",
        width: "100%",
        margin: "10px auto",
      }}
    >
      <h1>Detail of User</h1>
      <h3>Name: {usr.name}</h3>
      <p className="h4">username: {usr.name.first}</p>
      <p className="h4">email: {usr.email}</p>
      <p className="h4">phone: {usr.phone}</p>
      <p className="h4">website: {usr.website}</p>
      <Link to="/" className="btn btn-warning">
        Back
      </Link>
    </div>
  );
}

export default Details;
