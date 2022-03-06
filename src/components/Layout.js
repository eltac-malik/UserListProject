import { useState, useEffect } from "react";
import axios from "axios";
import p1 from "../img/26.jpg";
import p2 from "../img/23.jpg";
import p3 from "../img/16.jpg";
import { Link } from "react-router-dom";

function Layout() {
  const [usr, setUsr] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((resp) => setUsr(resp.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="container card-base">
      <div className="row">
        {usr.map((e, i) => {
          return (
            <div key={i} className="card">
              <img src={p3} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{e.name}</h5>
                <h3 className="card-title">{e.username}</h3>
                <Link to={`/details/${e.id}`} className="btn btn-warning">
                  Details
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Layout;
