import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";

function Details() {
  const [usr, setUsr] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`https://reqres.in/api/users/${id}`)
      .then((resp) => setUsr(resp.data.data))
      .catch((err) => console.log(err));
  }, []);


  return (
    <div className="card-title">

      <div className="card-pp">
        <img src={usr.avatar} alt="John" className="about-pp" />
        <h1>{usr.first_name}  { usr.last_name}</h1>
        <p className="title">CEO Founder, Example</p>
        <p>{usr.email}</p>
        <div className="icon-pp">
          <a href="#">
            <i className="fa fa-dribbble"></i>
          </a>
          <a href="#">
            <i className="fa fa-twitter"></i>
          </a>
          <a href="#">
            <i className="fa fa-linkedin"></i>
          </a>
          <a href="#">
            <i className="fa fa-facebook"></i>
          </a>
        </div>
        <p>
          <button className="button">Contact</button>
        </p>
          <Link className="button" to='/'>Back</Link>
      </div>
    </div>
  );
}

export default Details;
