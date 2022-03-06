import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Details from "./Details";
import Layout from "./Layout";

const Routing = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Layout />} />
        <Route path="/details/:id" element={<Details />} />
      </Routes>
    </Router>
  );
};

export default Routing;
