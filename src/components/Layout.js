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
      .get("https://randomuser.me/api/?results=10")
      .then((resp) => setUsr(resp.data.results))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="container card-base">
      <div className="row">
        {usr.map((e, i) => {
          return (
            <div key={i} className="card">
              <img src={e.picture.large} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{e.name.first}</h5>
                <h3 className="card-title">{e.login.username}</h3>
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
