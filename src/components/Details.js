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

  console.log(usr.avatar);

  return (
    <div>

      <div className="card-pp">
        <img src={usr.avatar} alt="John" className="about-pp" />
        <h1>John Doe</h1>
        <p className="title">CEO Founder, Example</p>
        <p>Harvard University</p>
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
          <button>Contact</button>
        </p>
      </div>
    </div>
  );
}

export default Details;
