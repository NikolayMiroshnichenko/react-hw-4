import React from "react";
import { Link } from "react-router-dom";

const HomeList = ({ items, location, title }) => (
  <div className="container">
    <h2>{title}</h2>
    <ul className="trending">
      {items.map((item) => (
        <li key={item.id} className="trending-item">
          <Link
            to={{
              pathname: `movies/${item.id}`,
              state: {from: location},
            }}
            className="trending-item__link"
          >
            {item.title}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

export default HomeList;
